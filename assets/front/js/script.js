function load_slick(){
    $('.banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: true,
        prevArrow: '<i class="bannerArrow prevArrow glyphicon glyphicon-menu-left"></i>',
        nextArrow: '<i class="bannerArrow nextArrow glyphicon glyphicon-menu-right"></i>',	
    });	

    $('.thumnail-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: '<i class="bannerArrow prevArrow glyphicon glyphicon-menu-left"></i>',
        nextArrow: '<i class="bannerArrow nextArrow glyphicon glyphicon-menu-right"></i>',	
        responsive: [
              {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                  dots: false,
                  arrows: true,
                }
            }
        ]
    });	
}

function viewPost(index){

    var object,minIndex,maxIndex,prevIndex,nextIndex;
    var print = '';

    const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    $("a[aria-controls=event]").click();


    if(index == 0){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b> ';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        print += 		'    Business Networking';
        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/B2B_Image_3.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Business Networking</h1>';
        print +=		'<b>4 October 2018 | 10:00 - 18:00</b>';
        print +=		'<br><h4>VENUE: Sheraton Grand Jakarta Gandaria City Hotel 3F Grand ballroom</h4>';
        print +=		'<p class="desc">40 Korean companies introduce their excellent cultural Content to buyer from Indonesia and ASEAN countries Program : 1:1 Biz-Matching / Networking Reception Content Fields: Broadcasting, Game & VR, Animation & Character</p>';
        print +=	'</div>';
    }else if(index == 1){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        print += 		'    K-Content Expo';
        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/B2C_Image_2.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">K-Content Expo</h1>';
        print +=		'<b>4 October 2018 | K-CONTENT</b>';
        print +=		'<br><h4>VENUE: Mall Kota Kasablanka</h4>';
        print +=		'<p class="desc">Korea Creative Content Agency (KOCCA) proudly presents qualified Korean broadcasting game, animation/character to Indonesia. You can enjoy various Korean content at once. There are also several special event such as content exhibition, K-drama/animation screening, meet and greet with artist, K-beauty makeup class and many more.</p>';
        print +=	'</div>';
    }else if(index == 2){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
        print += 		'    K-POP CONCERT';
        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/AM_EventPage_EC.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">K-POP CONCERT</h1>';
        print +=		'<b>6 October 2018 | K-CONTENT</b>';
        print +=		'<br><h4>VENUE: Kota Kasablanka Hall</h4>';
        print +=		'<p class="desc">Get ready for one of the biggest event in Korea Festival 2018. Enjoy 2 hours non-stop K-POP Concert featuring LOVELYZ, LYN, K.A.R.D, SNUPER and special performance by KOCCA\'s ambassador, HIGHLIGHT on 6th October 2018. Mark your calendar and get your tickets now!</p>';
        print +=	'</div>';
    }else if(index == 3){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    K-Beauty Premium Roadshow';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/4-event-b.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">K-Beauty Premium Roadshow</h1>';
        print +=		'<b>9 ~ 13 October 2018 | K-CONTENT</b>';
        print +=		'<br><h4>VENUE: Sheraton Grand Hotel Pacific Place Ritz Carlton Hote</h4>';
        print +=		'<p class="desc">About K-beauty Premium Road Show, The K-beauty Premium Road Show is: <br>- A platform for all types of korean medical & beauty products of excellent quality<br>- A premium show held in partnership with Gangnam-gu - a district in Korea well known for its highest-quality medical & beauty services - offering the best collection of K-medical & beauty products.</p>';
        print +=	'</div>';
    }else if(index == 4){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    ASEAN-Korea Cultural Night';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/5-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">ASEAN-Korea Cultural Night</h1>';
        print +=		'<b>19 October 2018 | K-CONTENT</b>';
        print +=		'<br><h4>VENUE: Pacific Place CGV</h4>';
        print +=		'<p class="desc"><b>The More you Know, The More You Will Love</b> By directly experienceing various Korean contents and food, you can enhance your familiarity with and understanding of korea. This event also will be showing Korean Animation and K-POP and free tasting of Korean foods</p>';
        print +=	'</div>';		
    }else if(index == 5){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Union of Art & Culture';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/6-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Union of Art & Culture Education Festival</h1>';
        print +=		'<b>8 ~ 14 October 2018 | K-CONTENT</b>';
        print +=		'<br><h4>VENUE: Lippo Mall Kemang</h4>';
        print +=		'<p class="desc">8th Oct 2.00 PM : Opening Ceremony<br>8th~14th Oct : Exhibition<br>9th Oct 3.30 PM : Experience of Korean Traditional Paper Art<br>10th Oct 3.30 PM : Experience of Korean Traditional Percussion Quartet<br>11th Oct 3.30 PM : Experience of Korean Calligraphy<br>13th~14th Oct 2.00 PM : Performance</p>';
        print +=	'</div>';	
    }else if(index == 6){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    K-Movie Festival & Seminar';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/7-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">K-Movie Festival & Seminar</h1>';
        print +=		'<b>18 ~ 21 October 2018 | K-CONTENT</b>';
        print +=		'<br><h4>VENUE: Jakarta - Grand Indonesia CGV, Jogja - Social Market CGV, Palembang - J-Walk CGV, Makassar - Daya Grand Square CGV</h4>';
        print +=		'<p class="desc">The 9th Korea Film Festival, which has been attracting much attention since its screning of popular blockbusters every year, will be held at a movie theater located in four major cities. Starting as an opening film "Negotatation" by Hyun Bin & Son Ye Jin, "Dective 1,2", "Along with Gods 1,2", "Battleship Island", "Forgotten" and many other Korean films. Furthermore, Seoul Arts Center Performance & Contents and Indonesia films will be screened</p>';
        print +=	'</div>';	
    }else if(index == 7){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Traditional Handicrafts';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/8-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Traditional Handicrafts Exhibition</h1>';
        print +=		'<b>26 ~ 31 October 2018 | K-EXHIBITION</b>';
        print +=		'<br><h4>VENUE: Korean Cultural Center</h4>';
        print +=		'<p class="desc"><b>Enjoy the Unique Lifestyle of Korean Summer.</b> Through the traditional summer necessities of Koreans made by the intangible cultural property, Jo Dae-Yong, you can learn how Koreans enjoy summer and overcome the heat</p>';
        print +=	'</div>';	
    }else if(index == 8){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Fortune Pouch';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/9-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Fortune Pouch by Lee Jong-Hyo</h1>';
        print +=		'<b>8 ~ 14 October 2018 | K-EXHIBITION</b>';
        print +=		'<br><h4>VENUE: Lippo Mall Kemang</h4>';
        print +=		'<p class="desc"><b>Spreading the Beauty of Korean Fortune Pouch to The World.</b> We invite Lee Joung-hyo, the artist of Korean emotions, to introduce our unique cultural-color emotions to Indonesia and share positive meaning of blessings through the exhibition of bags and embroideries decorated with ﬁve colors and embroideries. Traveling between Korea and abroad.</p>';
        print +=	'</div>';	
    }else if(index == 9){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Folk Painting Exhibition';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/10-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Folk Painting Exhibition</h1>';
        print +=		'<b>19 ~ 23 October 2018 | K-EXHIBITION</b>';
        print +=		'<br><h4>VENUE: Korean Cultural Center</h4>';
        print +=		'<p class="desc"><b>Feel & Enjoy Korea in the 19th.</b> Century Korean traditional folk painting is a practical and decorative painting, symbolizing the life feelings and world view of the ordinary people who desire wealthiness, rich resonance, and disease free longevity. It was mainly portrayed in the late 19th century Chosun Dynasty.</p>';
        print +=	'</div>';	
    }else if(index == 10){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Modern Art Exhibition';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/11-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Modern Art Exhibition</h1>';
        print +=		'<b>1 ~ 31 October 2018 | K-EXHIBITION</b>';
        print +=		'<br><h4>VENUE: Jakarta History Museum</h4>';
        print +=		'<p class="desc"><b>Elephant in The Room.</b> "Elephant in The Room" means that everyone knows it, but it`s a tiring problem. The objective of this exhibition is to create opportunities to communicate and share history with Jakarta citizens through similar historical experiences of modern Korean and Indonesian.</p>';
        print +=	'</div>';	
    }else if(index == 11){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Cooking for Palace Food';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/12-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Cooking Performance for Korean Palace Food</h1>';
        print +=		'<b>29 October 2018 | K-FOOD</b>';
        print +=		'<br><h4>VENUE: Grand Melia Hotel</h4>';
        print +=		'<p class="desc"><b>Be the King, Enjoy the King`s Diet.</b> You can learn the dishes of the kings of the Joseon Dynasty and try it yourself. Culinary lectures and tasting ceremonies are held by the intangible cultural property in terms of imperial food, Chung Gil-Ja.</p>';
        print +=	'</div>';	
    }else if(index == 12){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Feast';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/13-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Feast</h1>';
        print +=		'<b>4 ~ 14 October 2018 | K-FOOD</b>';
        print +=		'<br><h4>VENUE: Westine Hotel</h4>';
        print +=		'<p class="desc"><b>Enjoy authentic Korean food with Korean chefs.</b> Join us for some authentic Korean food at Seasonal Tastes, The Westin Jakarta as we welcome guest chefs from Sheraton Grand Incheon Hotel. Monday-Friday Lunch IDR 388,000++ Dinner IDR 408,000++ Saturday & Sunday Lunch & Dinner IDR 438,000++ Prices include ﬂavoured iced tea, soft driks and beer</p>';
        print +=	'</div>';	
    }else if(index == 13){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    K-Food Campus Festival';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/14-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">K-Food Campus Festival</h1>';
        print +=		'<b>3 ~ 4 October 2018 | K-FOOD</b>';
        print +=		'<br><h4>VENUE: UMN,BSD Serpong</h4>';
        print +=		'<p class="desc"><b>Enjoy Korean street food and various Korean foods.</b> This 5th Campus Project is an event to introduce Korean food more closely to local university students who are leading the consumer trend in Indonesia by directly watching, listening and feeling Korean food. Korean Food Demo Cooking | K-POP Cover Dance | Korean Traditional Game | Korean Food Contest | Giant Bibimbap Performance & Tasting | Quiz Competition</p>';
        print +=	'</div>';
    }else if(index == 14){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Coocking for Traditional Food';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/15-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Coocking Performance for Korean Traditional Food</h1>';
        print +=		'<b>28 October 2018 | K-FOOD</b>';
        print +=		'<br><h4>VENUE: Korean Cultural Center</h4>';
        print +=		'<p class="desc"><b>Be the King, Enjoy the King`s Diet.</b> You can learn the dishes of the kings of the Joseon Dynasty and try it yourself. Culinary lectures and tasting ceremonies are held by the intangible cultural property in terms of imperial food, Chung Gil-Ja.</p>';
        print +=	'</div>';
    }else if(index == 15){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Watch a GOOD Performance';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/16-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Watch a GOOD Performance</h1>';
        print +=		'<b>27 October 2018 | K-PERFORMANCE</b>';
        print +=		'<br><h4>VENUE: Ciputra Artpreneur Theater</h4>';
        print +=		'<p class="desc"><b>Comprehensive Performance of Various New Fun.</b> Promoting cultural exchange between the two countries through join performances of Korean traditional arts troupes and Indonesian artists. Performances of Korean traditional musical instruments, performance, dances and songs are held and new fun is offered through collaboration between the two countries.</p>';
        print +=	'</div>';
    }else if(index == 16){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Korean Traditional Opera';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/17-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Korean Traditional Opera Spring Spring & Arirang Nanjanggut</h1>';
        print +=		'<b>3 & 6 October 2018 | K-PERFORMANCE</b>';
        print +=		'<br><h4>VENUE: Jakarta-Balai Kartini(3 October), Batam-Best Western Hotel(6 October)</h4>';
        print +=		'<p class="desc"><b>When Novels Meet Music and Laugh.</b> Opera "BOM BOM (Spring Spring)" is a work that combines the comic and musical elements appropriately, and unravels the excellent language sense and dramatic composition of the original novel "BOM BOM" by the traditional play form and western opera. "Arirang Nanjanggut" is a Korean tradition of playing combining some elements  with elements of Korean song, dance, music and comedy as a part of "BOM BOM".</p>';
        print +=	'</div>';
    }else if(index == 17){
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Tales of Mother Land';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/18-event.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Tales of Mother Land</h1>';
        print +=		'<b>13 ~ 14 October 2018 | K-PERFORMANCE</b>';
        print +=		'<br><h4>VENUE: Lippo Mall Kemang</h4>';
        print +=		'<p class="desc"><b>WhenThe Concert of Poetry Song and Children Song.</b> Korean singer Hong Sun-gwan have a chance to dream of Korea`s beauty and beautiful future for children and young people who grow up with poetry song and children song.</p>';
        print +=	'</div>';
    }else{
        print +=	'<div class="col-xs-12 event-breadcumb">';
        print += 		'<a href="javascript:void(0);" class="breadcumb event-tab"><b>EVENT</b></a> <b>/ </b>';
        print += 		'<div class="dropdown">';
        print += 		'  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';

        print += 		'    Seoul Institute of The Arts';

        print += 		'    <span class="caret"></span>';
        print += 		'  </button>';
        print += 		'  <ul class="dropdown-menu" aria-labelledby="dLabel">';
        print += 		'    '+breadcumb(index);
        print += 		'  </ul>';
        print += 		'</div>';
        print +=	'</div>';

        print +=	'<div class="col-xs-12 event-detail">';
        print +=		'<img src="https://s3-ap-southeast-1.amazonaws.com/ecm-prd-pub/kfestival/assets/img/19-event-a.jpg" width="100%"/>';
        print +=		'<hr>';
        print +=		'<h1 class="heading">Seoul Institute of The Arts "NONDA NONDA NONDA"</h1>';
        print +=		'<b>11 ~ 12 & 13 ~ 14 October 2018 | K-PERFORMANCE</b>';
        print +=		'<br><h4>VENUE: Jakarta Sultan Hotel, Kudus Zone(11~12 October), Lippo Mall Kemang(13~14 October)</h4>';
        print +=		'<p class="desc">The stage of excitement and passion that Korea and Indonesia are uniﬁed through art Through lion dance and samulnori pangut, it shows the beauty and excitement of Korean traditional art. Singing Indonesian famous song "Bengawan Solo" and Arirang by Ensemble and Song. And now all become one, Indonesian traditional music with gamelan playing. Improvisation continues and all become one. The concert of Korean-Indonesian artists will decorate the ﬁnale</p>';
        print +=	'</div>';
    }

    $(".col-content.content-detail").html(print);

    $(".col-content.content-detail").show();
    $(".col-content.content-list").hide();

    $(".col-navigation").hide();
    $(".col-separator").hide();

    $('html, body').animate({
        scrollTop: $('.content-detail').offset().top
    }, "slow");

    $(".event-tab").click(function(){

        $(".col-content.content-detail").hide();
        $(".col-content.content-list").show();

        $(".col-navigation").show();
        $(".col-separator").show();
    });
}

function breadcumb(id){
    var print = '';
    var printContent = '';
    var printExhibition = '';
    var printFood = '';
    var printPerformance = '';

    var arrBreadcumb = [
        ['10','<a href="javascript:void(0);" onclick="viewPost(10)"><li>Korean Modern Art Exhibition</li></a>','K-EXHIBITION'],
        ['16','<a href="javascript:void(0);" onclick="viewPost(16)"><li>Korean Traditional Opera</li></a>','K-PERFORMANCE'],
        ['13','<a href="javascript:void(0);" onclick="viewPost(13)"><li>K-Food Campus Festival</li></a>','K-FOOD'],
        ['1','<a href="javascript:void(0);" onclick="viewPost(1)"><li>K-Content Expo</li></a>','K-CONTENT'],
        ['0','<a href="javascript:void(0);" onclick="viewPost(0)"><li>Business Networking</li></a>','K-CONTENT'],
        ['12','<a href="javascript:void(0);" onclick="viewPost(12)"><li>Korean Feast</li></a>','K-FOOD'],
        ['2','<a href="javascript:void(0);" onclick="viewPost(2)"><li>K-POP CONCERT</li></a>','K-CONTENT'],
        ['5','<a href="javascript:void(0);" onclick="viewPost(5)"><li>Korean Union of Art & Culture</li></a>','K-CONTENT'],
        ['8','<a href="javascript:void(0);" onclick="viewPost(8)"><li>Korean Fortune Pouch</li></a>','K-EXHIBITION'],
        ['3','<a href="javascript:void(0);" onclick="viewPost(3)"><li>K-Beauty Premium Roadshow</li></a>','K-CONTENT'],
        ['18','<a href="javascript:void(0);" onclick="viewPost(18)"><li>Seoul Institute of The Arts</li></a>','K-PERFORMANCE'],
        ['17','<a href="javascript:void(0);" onclick="viewPost(17)"><li>Tales of Mother Land</li></a>','K-PERFORMANCE'],
        ['4','<a href="javascript:void(0);" onclick="viewPost(4)"><li>ASEAN-Korea Cultural Night</li></a>','K-CONTENT'],
        ['6','<a href="javascript:void(0);" onclick="viewPost(6)"><li>K-Movie Festival & Seminar</li></a>','K-CONTENT'],
        ['9','<a href="javascript:void(0);" onclick="viewPost(9)"><li>Korean Folk Painting Exhibition</li></a>','K-EXHIBITION'],
        ['7','<a href="javascript:void(0);" onclick="viewPost(7)"><li>Korean Traditional Handicrafts</li></a>','K-EXHIBITION'],
        ['15','<a href="javascript:void(0);" onclick="viewPost(15)"><li>Watch a GOOD Performance</li></a>','K-PERFORMANCE'],
        ['14','<a href="javascript:void(0);" onclick="viewPost(14)"><li>Coocking for Traditional Food</li></a>','K-FOOD'],
        ['11','<a href="javascript:void(0);" onclick="viewPost(11)"><li>Cooking for Palace Food</li></a>','K-FOOD'],
    ]

    arrBreadcumb.forEach(function(item, index, array) {
        if(item[0] != id){
            switch(item[2]) {
                case 'K-CONTENT':
                    printContent += item[1];
                    break;
                case 'K-EXHIBITION':
                    printExhibition += item[1];
                    break;
                case 'K-FOOD':
                    printFood += item[1];
                    break;
                default:
                    printPerformance += item[1];
            }
        }
    });

    print += '<li class="group"><span class="square" style="background: #FBB040;"></span> K-CONTENT</li>'+printContent;
    print += '<li class="group"><span class="square" style="background: #A4238E;"></span> K-EXHIBITION</li>'+printExhibition;
    print += '<li class="group"><span class="square" style="background: #ED1A3B;"></span> K-FOOD</li>'+printFood;
    print += '<li class="group"><span class="square" style="background: #00AEEF;"></span> K-PERFORMANCE</li>'+printPerformance;

    return print;
}

function load_calendar(){
    var current_yyyymm_ 	= moment().format("YYYYMM");
    var current_yyyymm_oct  = moment().format("YYYYMM");//moment(new Date('2018-10-01')).format("YYYYMM");
    let kContentColor = '#fbb040';
    let kPerformanceColor = '#11B8E0';
    let kExhibitionColor = '#A25099';
    let kFoodColor = '#ED1A3B';


    $(".active a[aria-controls=event]").click(function(){
        $(".col-content.content-detail").hide();
        $(".col-content.content-list").show();

    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.fullcalendar').fullCalendar('render');
    })	

    $("a[aria-controls=home]").click(function(){
        $(".col-content.content-detail").hide();
        $(".col-content.content-list").show();

        $(".col-navigation").show();
        $(".col-separator").show();
    });

    $('.fullcalendar').fullCalendar({
        defaultView: 'month',
        defaultDate: '2019-10-01',
        firstDay: 2,
        contentHeight: 'auto',

        header: {
            left:   '',
            center: '',
            right:  ''
        },

        events: [

            {
                title: 'K-Content Expo 2019 Indonesia',
                start: '2019-10-03',
                end: '2019-10-07',
                color: kContentColor,
            },
            {
                title: 'Press Conference',
                start: '2019-09-25',
                end: '2019-09-25',
                color: kContentColor 
            },
            {
                title: 'Korean Home Cook Style Food Festival',
                start: '2019-10-03',
                end: '2019-10-14',
                color: kFoodColor,
            },
            {
                title: 'Hangul Day',
                start: '2019-10-09',
                end: '2019-10-09',
                color: kContentColor 
            },
            {
                title: 'Korea-Indonesia Film Festival 2019',
                start: '2019-10-10',
                end: '2019-10-14',
                color: kContentColor 
            },
            {
                title: 'FLYING',
                start: '2019-10-16',
                end: '2019-10-18',
                color: kPerformanceColor 
            },
            {
                title: 'The 6th Korean Cultural Art Association Festival',
                start: '2019-10-19',
                end: '2019-10-26',
                color: kContentColor 
            },
            
            {
                title: 'K-POP Concert',
                start: '2019-10-19',
                end: '2019-10-21',
                color: kPerformanceColor 
            },

            {
                title: 'Follow Gyeonggi K-Culture FESTA 2019',
                start: '2019-10-19',
                end: '2019-10-21',
                color: kPerformanceColor 
            },
            {
                title: '2019 The Best K-POP Cover in Indonesia',
                start: '2019-10-19',
                end: '2019-10-21',
                color: kPerformanceColor 
            },
            {
                title: 'DICAPOEM Exhibition',
                start: '2019-10-19',
                end: '2019-10-26',
                color: kExhibitionColor 
            },
            {
                title: 'Korea Culture Brand Festival',
                start: '2019-10-26',
                end: '2019-10-26',
                color: kExhibitionColor 
            },
            {
                title: 'Hanwha Life Activation Program 2019',
                start: '2019-10-26',
                end: '2019-10-26',
                color: kPerformanceColor 
            },
            {
                title: '2019 Asia Taekwondo Hanmadang Championship',
                start: '2019-10-26',
                end: '2019-10-28',
                color: kPerformanceColor 
            },
            {
                title: 'Asia Traditional Orchestra',
                start: '2019-11-06',
                end: '2019-11-06',
                color: kPerformanceColor 
            },
            
            {
                title: 'Study In Korea Fair',
                start: '2019-11-09',
                end: '2019-11-11',
                color: kExhibitionColor 
            },
            {
                title: 'Jakarta International Premium Products Fair 2019',
                start: '2019-11-07',
                end: '2019-11-10',
                color: kExhibitionColor 
            },
            {
                title: 'Opening Ceremony of Korea Corner',
                start: '2019-10-31',
                end: '2019-10-31',
                color: kExhibitionColor 
            },
            
        ]
    });
}


function scrollTop(){
    window.scrollTo(0,0);
}

function smoothScroll(elm) {
    $('html, body').animate({
        scrollTop: $(''+elm+'').offset().top
    }, 1000);
}

function activeEventButton(){
    $('.event-anchor-list').addClass("active");
}

function activeKoreaTicketButton(){
    $('.korea-ticket-anchor-list').addClass("active");
}

function activeKPopButton(){
    $('.k-pop-festival-anchor-list').addClass("active");
}

function activeRegistrationButton(){
    $('.performance-ticket-anchor-list').addClass("active");
}

function removeActiveButton(){
    $('.main-tabs li').removeClass("active");
}

$(document).ready(function(){
    load_slick();
    load_calendar();
    scrollTop();
})