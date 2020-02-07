export default class InstagramService {
  constructor(profile) {
    this.cacheName = "instamosaic";
    this.profile = profile;
    this.userData = null;
  }

  /**
   * Gets the computed cache name
   *
   * @return {String}
   */
  get _fullCacheName() {
    return `${this.cacheName}.${this.profile}`;
  }

  /**
   * Gets the computed api url
   *
   * @return {String}
   */
  get _fullUrl() {
    return `https://www.instagram.com/${this.profile}/?__a=1`;
  }

  /**
   * Gets the computed cache name
   *
   * @param {String}
   * @return {Date}
   */
  _stringToDate(date) {
    const d = date.split("-");
    return new Date(d[0], d[1] - 1, d[2]);
  }

  /**
   * Checks and returns the cache data
   * for the given profile
   *
   * @return {Object}
   */
  _getCache() {
    const storedData = localStorage.getItem(this._fullCacheName);

    if (!storedData) return false;

    const { expires, data } = JSON.parse(storedData);

    const expiresOn = this._stringToDate(expires);
    const today = this._stringToDate(new Date().toISOString().split("T")[0]);

    if (expiresOn < today) return false;

    return data;
  }

  /**
   * Sets the userData into localStorage
   * for caching purposes
   *
   * @param {Object} data
   */
  _setCache(data) {
    const d = new Date();
    d.setDate(d.getDate() + 7);
    const expireDate = d.toISOString().split("T")[0];
    const storedData = {
      expires: expireDate,
      data
    };
    localStorage.setItem(this._fullCacheName, JSON.stringify(storedData));
  }

  /**
   * Gets the userdata for a given profile
   * First from cache, then from the API if
   * necessary
   *
   * @param {String} profile
   */
  fetchData(profile) {
    this.profile = profile;
    const cachedData = this._getCache();
    if (cachedData) {
      this.userData = cachedData;
      return;
    }

    return fetch(this._fullUrl)
      .then(response => response.json())
      .then(({ graphql }) => {
        this.userData = graphql.user;
        this._setCache(this.userData);
      });
  }

  /**
   * Extracts the profile data from
   * the api output
   *
   * @return {Object}
   */
  get profileData() {
    const {
      biography,
      edge_follow,
      edge_followed_by,
      external_url: externalUrl,
      full_name: fullName,
      profile_pic_url: profilePicUrl,
      is_private: isPrivate,
      username
    } = this.userData;

    return {
      biography,
      followCount: edge_follow.count,
      followedByCount: edge_followed_by.count,
      externalUrl,
      fullName,
      isPrivate,
      profilePicUrl,
      username
    };
  }

  /**
   * Extracts the photos from the api data
   *
   * @return {Object}
   */
  get photos() {
    const { edges: photos } = this.userData.edge_owner_to_timeline_media;
    return photos.map(p => this._remapPhotoObject(p.node));
  }

  /**
   * Remaps key names to be more legible
   *
   * @param {Object} object
   * @return {Object}
   */
  _remapPhotoObject(object) {
    const {
      accessibility_caption: accessibilityCaption,
      dimensions,
      display_url: url,
      edge_liked_by: likes,
      edge_media_to_caption: caption,
      edge_media_to_comment: comments
    } = object;

    return {
      accessibilityCaption,
      caption: caption.edges.length ? caption.edges[0].node.text : "",
      commentCount: comments.count,
      dimensions,
      likeCount: likes.count,
      url
    };
  }
}
