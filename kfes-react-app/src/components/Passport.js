import React, {Component} from 'react'; 

class Passport extends Component {
    render()
    {
        return (
            <div className="row passport-page">
                <div className="col-sm-10 ml-sm-auto mr-sm-auto">
                    <section className="col-12 marquee-section hidden-xs" >
                        <div className="row">
                            <div className="col-5">
                                <h2 onclick="smoothScroll('#passport-to-korea')">PASSPORT TO KOREA</h2>
                            </div>
                            <div className="col-6">
                                <h2 onclick="smoothScroll('#temukan-mimpimu')">TEMUKAN MIMPIMU & INSPIRASIMU</h2>
                            </div>
                            <div className="col-1">
                                <h2 onclick="smoothScroll('#sns-competition')">SNS</h2>
                            </div>
                        </div>
                        
                    </section>

                    <section className="col-12 header-section">
                        <div className="row">
                            <div className="col-12">
                                <h3>WIN FREE TICKET TO KOREA</h3>
                                <h1>Your chance to WIN free ticket and fly to Korea! </h1>
                            </div>
                        </div>
                    </section>

                    <section id="passport-to-korea" className="col-12 passport-content-section">
                        <div className="row">
                            <div className="col-12 passport-content-header">
                                <h4>PASSPORT TO KOREA</h4>
                                <h2>Complete Your Stickers</h2>
                                <p>Collect stickers to the special page of your passport.</p>
                                <p>After you complete the page, bring it to Korean Cultural Center and put in the box provided. If you are lucky, you'll get a travel package to Korea, many other prizes are awaiting for you. </p>
                                <p>Good luck!</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/passport.jpg" className="img-fluid" alt="Passport to K-Festival" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10 passport-body">
                                <h3>Syarat dan Ketentuan mengikuti program ini:</h3>
                                <ol>
                                    <li>Program ini berlaku selama Korea Festival 2019.</li>
                                    <li>Pengundian dan pengumuman pemenang akan dilakukan setelah acara selesai</li>
                                    <li>Ada 2 tiket pulang pergi Jakarta-Korea untuk 2 Pemenang. Sementara pemenang yang lain akan mendapatkan hadiah menarik lainnya.</li>
                                    <li>Pemenang dipilih secara acak melalui mekanisme yang telah memperoleh izin dari lembaga pemerintah yang disahkan dan dijalankan sesuai dengan hukum dan peraturan yang berlaku di Indonesia.</li>
                                    <li> Keputusan bersifat final, mengikat, dan tidak dapat diganggu gugat.</li>
                                    <li>Panitia akan menghubungi pemenang melalui nomor telepon yang tercantum dalam formulir dan mengirim pemberitahuan ke akun email pemenang.</li>
                                    <li> Panitia berhak untuk membatalkan keputusan tentang pemenang jika ternyata pemenang tidak layak secara hukum untuk dipilih sebagai pemenang karena masalah yang ditemukan oleh panitia di kemudian hari.</li>
                                    <li>Panitia tidak akan bertanggung jawab atas pajak hadiah dan / atau pengeluaran pribadi lainnya yang harus ditanggung atau mungkin ditanggung oleh pemenang sehubungan dengan penerimaan atau penggunaan hadiah.</li>
                                    <li>Komite tidak bertanggung jawab atas kerugian yang diderita oleh orang, badan atau barang, baik secara langsung maupun tidak langsung, yang timbul dari atau sehubungan dengan pemberian, pengiriman, pengumpulan dan / atau penggunaan hadiah.</li>
                                    <li>Panitia tidak berkewajiban mengganti hadiah dengan apa pun, jika pemenang dan / atau pihak yang ditunjuk atau dipilih tidak dapat menikmati hadiah.</li>
                                    <li>Panitia tidak akan mengganti hadiah yang hilang atau dicuri.</li>
                                </ol>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/logo_footer_kpassport.jpg" className="img-fluid" alt="Partners of K-Festival" />
                            </div>
                        </div>
                        
                    </section>

                    <hr className="separator" />

                    <section id="temukan-mimpimu" className="col-12 passport-content-section">
                        <div className="row">
                            <div className="col-12 passport-content-header">
                                <h4>PASSPORT TO KOREA</h4>
                                <h2>Temukan Mimpi & Inspirasimu</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/%5BPoster%5DMake%20your%20dream%20come%20true%402x.png" className="img-fluid" alt="Make Your Dream Come True Poster" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-10 passport-body">
                                <p>Korean Cultural Center Indonesia bersama Provinsi Gyeonggi, Gyeonggi-do Tourism Organization, dan Asiana Airlines mengajak kamu untuk ikut kompetisi video “Temukan Mimpi dan Inspirasimu, Terbang Bersama Asiana Airlines ke #GyeonggiDo #Korea”.</p>
                                <p>Hadiahnya: 5 paket wisata ke Provinsi Gyeonggi, Korsel.</p>
                                <p>Simak informasi lengkap dan cara untuk ikutan di website KCC (id.korean-culture.org). Kami nantikan partisipasi kalian</p>
                                <div className="btn-ext-link-wrapper">
                                    <a className="btn-ext-link" href="http://id.korean-culture.org" >Go To Official Website <i className="glyphicon glyphicon-chevron-right"></i></a>

                                </div>
                                <div className="sns-wrapper">
                                    <a href="https://www.instagram.com/kcc.id"  title="KCC Indonesia Instagram" className="sns">
                                        <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-instagram.png" alt="Instagram Icon" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </section>

                    <hr className="separator" />

                    <section id="sns-competition" className="col-12 passport-content-section">
                        <div className="row">
                            <div className="col-12 passport-content-header">
                                <h4>SNS Promo</h4>
                                <h2>SNS Hashtag Event</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns.jpeg" className="img-fluid center" alt="SNS Hashtag Event" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2"></div>
                                <div className="col-sm-10 passport-body">
                                    <p>Hadiahnya: 2 paket wisata ke Provinsi Gyeonggi, Korsel.</p>
                                    <br />
                                    <p>Simak informasi lengkap dan cara untuk ikutan di website KCC (id.korean-culture.org).</p>
                                    <p>Kami nantikan partisipasi kalian.</p>
                                    <div className="btn-ext-link-wrapper">
                                        <a className="btn-ext-link" href="http://id.korean-culture.org" >Go To Official Website <i className="glyphicon glyphicon-chevron-right"></i></a>

                                    </div>
                                    <div className="sns-wrapper">
                                        <a href="https://www.instagram.com/kcc.id"  title="KCC Indonesia Instagram" className="sns">
                                            <img src="https://ecm-prd-pub.s3.ap-southeast-1.amazonaws.com/kfestival/assets/img/sns-button-instagram.png" alt="Instagram Icon" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Passport; 
