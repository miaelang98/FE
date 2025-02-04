const { kakao } = window;

export default async function KeywordSearchOneAsync(centerPos, keyword) {
    let places = new kakao.maps.services.Places();

    return new Promise((resolve, reject) => {
        let callback = (data, status, _pagination) => {
            if (status === kakao.maps.services.Status.OK) {
                // Currently, return only one place
                if (data.length === 0) {
                    reject('No data found');
                } else {
                    resolve(data[0]);
                }
            }
        };

        places.keywordSearch(keyword, callback, {
            location: new kakao.maps.LatLng(centerPos.lat, centerPos.lng),
            radius: 1000,
        });
    });
}
