'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('events', 'events.html', true),            
            new Route('k-content-expo-2019', 'events/k-content-expo-2019.html'),
            new Route('seoul-food-from-home', 'events/korean-home-cook-style-food-festival.html'),

            new Route('hangul-day', 'events/hangul-day.html'),
            new Route('korea-indonesia-film-festival-2019', 'events/korea-indonesia-film-festival.html'),
            new Route('korea-indonesia-film-festival', 'events/korea-indonesia-film-festival.html'),
            new Route('flying', 'events/flying.html'),
            new Route('k-pop-concert', 'events/k-pop-concert.html'),
            new Route('follow-gyeonggi-k-culture-festa-2019', 'events/follow-gyeonggi-k-culture-festa-2019.html'),
            new Route('follow-gyeonggi-k-culture-festa-2019-istora-senayan-outside-square', 'events/follow-gyeonggi-k-culture-festa-2019-outside-square.html'),

            new Route('the-best-k-pop-cover-in-indonesia', 'events/the-best-k-pop-cover-in-indonesia.html'),

            new Route('the-6th-korean-cultural-art-association-festival', 'events/the-6th-korean-cultural-art-association-festival.html'),
            new Route('dicapoem-exhibition', 'events/dicapoem-exhibition.html'),
            new Route('hanhwa-life-activation-program-2019', 'events/hanhwa-life-activation-program-2019.html'),
            new Route('jakarta-gugak-festival', 'events/jakarta-gugak-festival.html'),
            new Route('2019-asia-taekwondo-hanmadang-championship', 'events/2019-asia-taekwondo-hanmadang-championship.html'),
            new Route('opening-ceremony-of-korea-corner', 'events/opening-ceremony-of-korea-corner.html'),
            new Route('asia-traditional-orchestra', 'events/asia-traditional-orchestra.html'),
            new Route('jakarta-international-premium-products-fair-2019', 'events/jakarta-international-premium-products-fair-2019.html'),
            new Route('study-in-korea-fair', 'events/study-in-korea-fair.html'),
            new Route('korea-culture-brand-festival', 'events/korea-culture-brand-festival.html'),
            new Route('korean-bazaar-on-sale', 'events/korean-bazaar-on-sale.html'),
            new Route('korean-food-festival', 'events/korean-food-festival.html'),
            new Route('liburan-gratis-ke-korea', 'passport.html'),
            new Route('tiket-pertunjukkan-gratis', 'tiket-pertunjukkan-gratis.html'),

        ]);
    }
    init();
}());
