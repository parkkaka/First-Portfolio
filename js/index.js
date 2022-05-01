this.addEventListener('load', () => {
  let lck_logo = document.querySelector("#lck_logo");
  let best_player_week = document.querySelector("#best_player_week");
  let play_schedul = document.querySelector("#play_schedul");
  let team_rank = document.querySelector("#team_rank");
  let team_player = document.querySelector("#team_player");
  let highlight_video = document.querySelector("#highlight_video");
  let stadium_location = document.querySelector("#stadium_location");
  let ticket_pre_buy = document.querySelector("#ticket_pre_buy");
  let top_btn = document.querySelector(".top_btn");

  // 메뉴버튼을 누르면 스무스하게 페이지로이동 + top버튼을 누르면 최상단으로 

  class mosue_scroll {
    constructor() {
      this.main_box2_display = document.querySelector("#main_box2");
      this.main_box3_display = document.querySelector("#main_box3");
      this.main_box4_display = document.querySelector("#main_box4");
      this.main_box5_display = document.querySelector("#main_box5");
      this.main_box6_display = document.querySelector("#main_box6");
      this.main_box7_display = document.querySelector("#main_box7");
    }
    mouse_controll1() {
      play_schedul.addEventListener('click', () => {
        this.main_box2_display.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
    mouse_controll2() {
      team_rank.addEventListener('click', () => {
        this.main_box3_display.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
    mouse_controll3() {
      team_player.addEventListener('click', () => {
        this.main_box4_display.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
    mouse_controll4() {
      highlight_video.addEventListener('click', () => {
        this.main_box5_display.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
    mouse_controll5() {
      ticket_pre_buy.addEventListener('click', () => {
        this.main_box6_display.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
    mouse_controll6() {
      stadium_location.addEventListener('click', () => {
        this.main_box7_display.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
    top_controls() {
      let main_box = document.querySelector('#main_box');
      top_btn.addEventListener('click', () => {
        main_box.scrollIntoView({
          behavior: "smooth"
        });
      })
    }
  }
  let My_Mouse = new mosue_scroll();
  My_Mouse.mouse_controll1();
  My_Mouse.mouse_controll2();
  My_Mouse.mouse_controll3();
  My_Mouse.mouse_controll4();
  My_Mouse.mouse_controll5();
  My_Mouse.mouse_controll6();
  My_Mouse.top_controls();

  // lck버튼 마우스 올리면 정보 뜨고 마우스나가면 전시즌 우승, 준우승

  class lck_display {
    constructor() {
      this.mid_box = document.querySelectorAll("#mid_box");
      this.mid_box = document.querySelectorAll("#mid_box");
    }
    last_info() {
      lck_logo.addEventListener('mouseover', () => {
        this.mid_box.forEach(function (v1) {
          v1.style.display = "block";
        })
      })
    }
    last_info2() {
      lck_logo.addEventListener('mouseout', () => {
        this.mid_box.forEach(function (v2) {
          v2.style.display = "none"
        })
      })
    }
  }
  let My_lck_last_info = new lck_display();
  My_lck_last_info.last_info();
  My_lck_last_info.last_info2();

  // week best플레이어  마우스 올리면 정보 뜨고 마우스나가면 정보나가는 객체

  class best_player_display {
    constructor() {
      this.best_mid_box = document.querySelectorAll("#best_mid_box");
      this.best_mid_box = document.querySelectorAll("#best_mid_box");
    }
    player_info() {
      best_player_week.addEventListener('mouseover', () => {
        this.best_mid_box.forEach(function (v3) {
          v3.style.display = " block";
        })
      })
    }
    player_info_off() {
      best_player_week.addEventListener('mouseout', () => {
        this.best_mid_box.forEach(function (v4) {
          v4.style.display = "none";
        })
      })
    }
  }
  let My_best_player_info = new best_player_display();
  My_best_player_info.player_info();
  My_best_player_info.player_info_off();
});

// 경기 일정 슬라이드

class play_day_info {
  constructor(team_display) {
    this.team_display = team_display;
    this.date_info = document.querySelector('.date_info');
  }
  play_info_order() {
    let play_day = document.querySelectorAll(".play_day");
    play_day.forEach((v, i, a) => {
      play_day[i].addEventListener('mouseover', (e) => {
        if (e.target == play_day[i]) {
          this.date_info.style.display = "none";
          play_info.style.display = "block";
          play_info.innerHTML = this.team_display[i];
        }
      })
    })
  }
  play_info_order_out() {
    let play_day = document.querySelectorAll(".play_day");
    play_day.forEach((v, i, a) => {
      play_day[i].addEventListener('mouseout', (e) => {
        if (e.target == play_day[i]) {
          this.date_info.style.display = "block";
          play_info.style.display = "none";
        }
      })
    })
  }
}
let My_day_info = new play_day_info(
  [
    '<div class="t1_play"></div><span class="t1_play_info"> [9] 17:00<br>물오른<br>미드정글!<br>한화 전<br>미드라인<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [9] 17:00<br>물오른<br>바텀듀오!<br>T1 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="dk_play"></div><span class="dk_play_info"> [10] 17:00<br>물오른<br>광동 전<br>라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="kdf_play"></div><span class="kdf_play_info"> [10] 17:00<br>물오른<br>바텀듀오!<br>dK 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="ns_play"></div><span class="ns_play_info"> [11] 17:00<br>물오른<br>미드정글!<br>브리온 전<br>미드라인<br>관전포인트</span><div class="vs_mark">VS</div><div class="bro_play"></div><span class="bro_play_info"> [11] 17:00<br>물오른<br>바텀듀오!<br>농심 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="t1_play"></div><span class="t1_play_info"> [12] 17:00<br>물오른<br>바텀듀오!<br>젠지 전<br> 봇 라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="gen_play"></div><span class="gen_play_info"> [12] 17:00<br>물오른<br>전라인!<br>T1 전<br>모든라인<br>관전포인트</span>',
    '<div class="dk_play"></div><span class="dk_play_info"> [13] 17:00<br>물오른<br>바텀듀오!<br>한화 전<br>봇 라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [13] 17:00<br>물오른<br>바텀듀오!<br>담원 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="ns_play"></div><span class="ns_play_info"> [16] 17:00<br>물오른<br>미드정글!<br>한화 전<br>미드라인<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [16] 17:00<br>물오른<br>바텀듀오!<br>농심 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="t1_play"></div><span class="t1_play_info"> [17] 17:00<br>물오른<br>바텀듀오!<br>한화 전<br>봇 라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [17] 17:00<br>물오른<br>바텀듀오!<br>T1 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="dk_play"></div><span class="dk_play_info"> [18] 17:00<br>물오른<br>광동 전<br>라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="kdf_play"></div><span class="kdf_play_info"> [18] 17:00<br>물오른<br>바텀듀오!<br>dK 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="ns_play"></div><span class="ns_play_info"> [19] 17:00<br>물오른<br>미드정글!<br>브리온 전<br>미드라인<br>관전포인트</span><div class="vs_mark">VS</div><div class="bro_play"></div><span class="bro_play_info"> [19] 17:00<br>물오른<br>바텀듀오!<br>농심 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="t1_play"></div><span class="t1_play_info"> [20] 17:00<br>물오른<br>바텀듀오!<br>젠지 전<br> 봇 라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="gen_play"></div><span class="gen_play_info"> [20] 17:00<br>물오른<br>전라인!<br>T1 전<br>모든라인<br>관전포인트</span>',
    '<div class="dk_play"></div><span class="dk_play_info"> [23] 17:00<br>물오른<br>바텀듀오!<br>한화 전<br>봇 라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [23] 17:00<br>물오른<br>바텀듀오!<br>담원 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="ns_play"></div><span class="ns_play_info"> [24] 17:00<br>물오른<br>미드정글!<br>한화 전<br>미드라인<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [24] 17:00<br>물오른<br>바텀듀오!<br>농심 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="t1_play"></div><span class="t1_play_info"> [25] 17:00<br>물오른<br>바텀듀오!<br>한화 전<br>봇 라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="hle_play"></div><span class="hle_play_info"> [25] 17:00<br>물오른<br>바텀듀오!<br>T1 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="dk_play"></div><span class="dk_play_info"> [26] 17:00<br>물오른<br>광동 전<br>라인전<br>관전포인트</span><div class="vs_mark">VS</div><div class="kdf_play"></div><span class="kdf_play_info"> [26] 17:00<br>물오른<br>바텀듀오!<br>dK 전<br>봇 라인전<br>관전포인트</span>',
    '<div class="ns_play"></div><span class="ns_play_info"> [27] 17:00<br>물오른<br>미드정글!<br>브리온 전<br>미드라인<br>관전포인트</span><div class="vs_mark">VS</div><div class="bro_play"></div><span class="bro_play_info"> [27] 17:00<br>물오른<br>바텀듀오!<br>농심 전<br>봇 라인전<br>관전포인트</span>',
  ]
);
My_day_info.play_info_order();
My_day_info.play_info_order_out();

// 라운드 로스터 정보 객체

class five_logo_display {
  constructor() {}
  size_img_dis() {
    let size_img = document.querySelectorAll('.size_img');
    let text_box = document.querySelectorAll('.text_box');
    size_img.forEach((v, i, a) => {
      size_img[i].addEventListener('mouseover', (e) => {
        if (e.target == size_img[i]) {
          text_box[i].style.display = "block";
          logo_push.style.display = "none";
        }
      })
    })
  }
  size_img_dis_off() {
    let size_img = document.querySelectorAll('.size_img');
    let text_box = document.querySelectorAll('.text_box');
    size_img.forEach((v, i, a) => {
      size_img[i].addEventListener('mouseout', (e) => {
        if (e.target == size_img[i]) {
          text_box[i].style.display = "none";
          logo_push.style.display = "block";
        }
      })
    })
  }
}
let My_five_logo = new five_logo_display();
My_five_logo.size_img_dis();
My_five_logo.size_img_dis_off();


// 하이라이트 영상 

let beam = [...document.querySelectorAll(".beam")];
class video_display_order {
  constructor(myVideo, myIntro) {
    this.myVideo = myVideo;
    this.myIntro = myIntro;
    this.video_right = document.querySelector('#video_right');
    this.video_left = document.querySelector('#video_left');
  }
  highlight_video_order() {
    this.video_right.addEventListener('click', () => {
      this.myVideo.push(this.myVideo.shift());
      this.myIntro.push(this.myIntro.shift());
      let tempA3;
      tempA3 = beam.shift();
      beam.push(tempA3);
      beam.forEach((v, i, a) => {
        if (beam[i] == beam[0]) {
          beam[i].style.display = "block";
        } else {
          beam[i].style.display = "none";
        }
      })
      beam[0].style.color = "red";
      video1.innerHTML = this.myVideo[0] + this.myIntro[0];
    })
    this.video_left.addEventListener('click', () => {
      let tempA;
      tempA = this.myVideo.pop();
      this.myVideo.unshift(tempA);
      let tempA2;
      tempA2 = this.myIntro.pop();
      this.myIntro.unshift(tempA2);
      let tempA3;
      tempA3 = beam.pop();
      beam.unshift(tempA3);
      beam.forEach((v, i, a) => {
        //beam[i].style.color="#646464";
        if (beam[i] == beam[0]) {
          beam[i].style.display = "block";
        } else {
          beam[i].style.display = "none";
        }
      })
      beam[0].style.color = "red";
      video1.innerHTML = this.myVideo[0] + this.myIntro[0];
    })
  }
}
let My_Video_hi = new video_display_order(
  [
    '<iframe class="highlight_video1" src="https://www.youtube.com/embed/ma81iMPV4rU" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="highlight_video1" src="https://www.youtube.com/embed/DTb1X6U_1TI" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="highlight_video1" src="https://www.youtube.com/embed/ZF9Yt7yceBo" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="highlight_video1" src="https://www.youtube.com/embed/aeo-EuvOqAc" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    '<iframe class="highlight_video1" src="https://www.youtube.com/embed/mHROYOpI3hI" width="100%" height="100%" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  ],
  [
    '<div class="text_memo"> 한화 vs 샌박 | 매치30 하이라이트 | 01.30 </div> ',
    '<div class="text_memo"> 젠지 vs. KT | 매치27 하이라이트 | 01.29  </div>',
    '<div class="text_memo"> T1 vs. 농심 | 매치24 하이라이트 | 01.27 </div>',
    '<div class="text_memo"> 한화 vs. 담원  | 매치25 하이라이트 | 01.28  </div>',
    '<div class="text_memo"> DRX vs. 브리 | 매치22 하이라이트 | 01.26 </div>'
  ]
);
My_Video_hi.highlight_video_order();


// 로드되면 포트폴리오용 페이지 알림 

window.onload = () => {
  let page_modal = document.querySelector(".page_modal");
  let x_btn = document.querySelector(".x_btn");
  x_btn.addEventListener('click', () => {
    page_modal.style.display = "none";
  })
}

// 날짜모달창

class tiket_buy_dis {
  constructor() {
    this.weekday_select = document.querySelectorAll(".weekday_select");
    this.tiket_buy_modal = document.querySelector(".tiket_buy_modal");
    //this.tiket_possible = document.querySelectorAll(".tiket_possible");
    this.main_box6 = document.querySelector(".main_box6");
    this.pre_buy_btn = document.querySelector(".pre_buy_btn");
    this.alert_notice = document.querySelector(".alert_notice");
    this.out_btn = document.querySelector(".out_btn");
    this.plus_btn = document.querySelector('.plus_btn');
    this.minus_btn = document.querySelector('.minus_btn');
    this.plus_btn2 = document.querySelector('.plus_btn2');
    this.minus_btn2 = document.querySelector('.minus_btn2');
  }
  ticket_buy() {
    this.weekday_select.forEach((v, i, a) => {
      this.weekday_select[i].addEventListener('click', () => {
        if (this.weekday_select[i]) {
          this.tiket_buy_modal.style.display = "block";
          this.main_box6.style.opacity = "0.1";
          this.alert_notice.style.display = "none";
        }
      })
    })
    this.pre_buy_btn.addEventListener('click', () => {
      this.alert_notice.style.display = "block";
    })
  }
  modarl_off() {
    this.alert_notice.addEventListener('click', () => {
      this.tiket_buy_modal.style.display = "none";
      this.main_box6.style.opacity = "1";
      let number_val = document.querySelector('.number_value');
      number_val.value = 0;
      let number_value2 = document.querySelector('.number_value2');
      number_value2.value = 0;
    })
  }
  out_dis() {
    this.out_btn.addEventListener('click', () => {
      this.tiket_buy_modal.style.display = "none";
      this.main_box6.style.opacity = "1";
      let number_val = document.querySelector('.number_value');
      number_val.value = 0;
      let number_value2 = document.querySelector('.number_value2');
      number_value2.value = 0;
    })
  }
  plus_cal() {
    this.plus_btn.addEventListener('click', () => {
      let number_val = document.querySelector('.number_value');
      if (number_val.value < 3) {
        number_val.value = ++number_val.value;
      }
    })
  }
  minus_cal() {
    this.minus_btn.addEventListener('click', () => {
      let number_val = document.querySelector('.number_value');
      if (number_val.value > 0 && number_val.value <= 3) {
        number_val.value = --number_val.value;
      }
    })
  }
  plus_cal2() {
    this.plus_btn2.addEventListener('click', () => {
      let number_value2 = document.querySelector('.number_value2');
      if (number_value2.value < 3) {
        number_value2.value = ++number_value2.value;
      }
    })
  }
  minus_cal2() {
    this.minus_btn2.addEventListener('click', () => {
      let number_value2 = document.querySelector('.number_value2');
      if (number_value2.value > 0 && number_value2.value <= 3) {
        number_value2.value = --number_value2.value;
      }
    })
  }
}
let My_ticket_buy = new tiket_buy_dis();
My_ticket_buy.ticket_buy();
My_ticket_buy.modarl_off();
My_ticket_buy.out_dis();
My_ticket_buy.plus_cal();
My_ticket_buy.minus_cal();
My_ticket_buy.plus_cal2();
My_ticket_buy.minus_cal2();