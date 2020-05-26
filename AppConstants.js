
module.exports = {
    /**
     * Looking for merchants that are in the 5 mile radius
     */
    SEARCH_RADIUS: 5.00,
    /**
     * Min and Max Latitudes
     */
    MIN_LATITUDE: -90.00,
    MAX_LATITUDE: 90.00,

    /**
     * Min and Max Longitudes
     */
    MIN_LONGITUDE: -180.00,
    MAX_LONGITUDE: 180.00,

    /**
     * Max Latitude is 180 (-90,90)
     * The length of Equator of Earth is 25000 miles
     * So, below is the representation of 1 mile distance in degrees for latitude direction
     */
    LATITUDE_DEGREE_PER_MILE: 180.00/25000.00,

    /**
     * Max Latitude is 180 (-90,90)
     * The length of Equator of Earth is 25000 miles
     * So, below is the representation of 1 mile distance in degrees for longitude direction
     */
    LONGITUDE_DEGREE_PER_MILE: 360.00/25000.00
}