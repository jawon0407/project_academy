//모달창 만들기
const productList = document.querySelectorAll(".product_list li");
const modal = document.querySelector(".modal_tab");
const modalContainer = document.querySelector(".modal_container");
const modalClose = document.querySelector(".exit a");
const modalBackground = document.querySelector(".modal_background");
const productImg = document.querySelector(".product_img img");
const productTitle = document.querySelector(".product_info > span");
const productMaterial = document.querySelector(
  ".racket_information dl:first-child dd"
);
const productStiff = document.querySelector(
  ".racket_information dl:nth-child(2) dd"
);
const productSize = document.querySelector(
  ".racket_information dl:nth-child(3) dd"
);
const productCharacteristic = document.querySelector(
  ".racket_information dl:last-child dd"
);
const productUsedSkills = document.querySelectorAll(".technic_list li");

//모달창 안에 들어갈 내용 배열로 생성
class Product {
  constructor(
    name,
    imgSrc,
    imgAlt,
    size,
    shout,
    color,
    characteristic,
    material,
    skill1,
    skill2,
    skill3,
    skill4,
    skill5,
    skill6
  ) {
    this.name = name;
    this.color = color;
    this.shout = shout;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.size = size;
    this.characteristic = characteristic;
    this.material = material;
    this.skill1 = skill1;
    this.skill2 = skill2;
    this.skill3 = skill3;
    this.skill4 = skill4;
    this.skill5 = skill5;
    this.skill6 = skill6;
  }
  productInfo() {
    productImg.src = this.imgSrc;
    productImg.alt = this.imgAlt;
    productTitle.innerHTML = this.name;
    productMaterial.innerHTML = this.material;
    productStiff.innerHTML = this.shout;
    productSize.innerHTML = this.size;
    productCharacteristic.innerHTML = this.characteristic;
    productUsedSkills[0].innerHTML = this.skill1;
    productUsedSkills[1].innerHTML = this.skill2;
    productUsedSkills[2].innerHTML = this.skill3;
    productUsedSkills[3].innerHTML = this.skill4;
    productUsedSkills[4].innerHTML = this.skill5;
    productUsedSkills[5].innerHTML = this.skill6;
  }
}

class clothes{
    constructor(
        name,
        imgSrc,
        imgAlt,
        size,
        material,
        color,
        characteristic,
        skill1,
        skill2,
        skill3,
        skill4,
    ){
      //상속받은 클래스에서 생성자를 재정의 할 때는 super()를 사용해야한다.
      this.name=name, 
      this.imgSrc = imgSrc, 
      this.imgAlt = imgAlt, 
      this.material= material, 
      this.size = size, 
      this.color = color, 
      this.characteristic = characteristic, 
      this.skill1 = skill1, 
      this.skill2 = skill2, 
      this.skill3 = skill3, 
      this.skill4 = skill4;
}
    productInfo(){
        productTitle.innerHTML = this.name;
        productImg.src = this.imgSrc;
        productImg.alt = this.imgAlt;
        productMaterial.innerHTML = this.material;
        productStiff.innerHTML = this.color;
        productSize.innerHTML = this.size;
        productCharacteristic.innerHTML = this.characteristic;
        productUsedSkills[0].innerHTML = this.skill1;
        productUsedSkills[1].innerHTML = this.skill2;
        productUsedSkills[2].innerHTML = this.skill3;
        productUsedSkills[3].innerHTML = this.skill4;
    }
}

const imgArr = [
  //badminton
  {
    src: "./images/badminton/astrox100zz.png",
    alt: "astrox_100zz",
  },
  {
    src: "./images/badminton/astrox99.png",
    alt: "astrox_99_pro",
  },
  {
    src: "./images/badminton/astrox88s_pro.png",
    alt: "astrox_88s_pro",
  },
  {
    src: "./images/badminton/astrox88d.png",
    alt: "astrox_88d",
  },
  {
    src: "./images/badminton/astrox77.png",
    alt: "astrox_77",
  },
  {
    src: "./images/badminton/astrox66.png",
    alt: "astrox_66",
  },
  {
    src: "./images/badminton/nanoflare700.png",
    alt: "nanoflare700(2022 model)",
  },
  {
    src: "./images/badminton/nanoflare555.png",
    alt: "nanoflare555",
  },
  {
    src: "./images/badminton/nanoflare170.png",
    alt: "nanoflare170",
  },
  {
    src: "./images/badminton/nanoflarex7.png",
    alt: "nanoflarex7",
  },
  {
    src: "./images/badminton/nanoflare001_clear.png",
    alt: "nanoflare001_clear",
  },
  {
    src: "./images/badminton/nanoflare001_feel.png",
    alt: "nanoflare001_feel",
  },
  {
    src: "./images/badminton/DUORA_Z-STRIKE.png",
    alt: "duoraZ-strike",
  },
  {
    src: "./images/badminton/DUORA10.png",
    alt: "duora10",
  },
  {
    src: "./images/badminton/DUORA_10LT.png",
    alt: "duora10_lt",
  },
  {
    src: "./images/badminton/DUORA9.png",
    alt: "duora9",
  },
  {
    src: "./images/badminton/DUORA7.png",
    alt: "duora7",
  },
  {
    src: "./images/badminton/DUORA6.png",
    alt: "duora6",
  },
  {
    src: "./images/badminton/arcsavor_11_pro.png",
    alt: "arcsavor_11_pro",
  },
  {
    src: "./images/badminton/arcsavor_10(2020model).png",
    alt: "arcsavor_10_2020model",
  },
  {
    src: "./images/badminton/arcsavor_11(2020model).png",
    alt: "arcsavor_11_2020model",
  },
  {
    src: "./images/badminton/arcsaver_2i.png",
    alt: "arcsavor_2i",
  },
  {
    src: "./images/badminton/arcsavor_11.png",
    alt: "arcsavor_11",
  },
  {
    src: "./images/badminton/arcsavor_fb.png",
    alt: "arcsavor_fb",
  },
  {
    src: "./images/badminton/nanorayGlanZ.jpg",
    alt: "nanoray_Glan_Z",
  },
  {
    src: "./images/badminton/nanorayZspeed.jpg",
    alt: "nanoray_z_speed",
  },
  {
    src: "./images/badminton/nanoray900.jpg",
    alt: "nanoray900",
  },
  {
    src: "./images/badminton/nanoray800.jpg",
    alt: "nanoray800",
  },
  {
    src: "./images/badminton/nanoray750.jpg",
    alt: "nanoray750",
  },
  {
    src: "./images/badminton/nanoray700_fx.jpg",
    alt: "nanoray700_fx",
  },
  //tennis
  {
    src: "./images/tennis/vcore95tagr.png",
    alt: "vcore95tagr",
  },
  {
    src: "./images/tennis/vcore98tagr.png",
    alt: "vcore98tagr",
  },
  {
    src: "./images/tennis/vcore98ltagr.png",
    alt: "vcore98ltagr",
  },
  {
    src: "./images/tennis/vcore100tagr.png",
    alt: "vcore100tagr",
  },
  {
    src: "./images/tennis/vcore100ltagr.png",
    alt: "vcore100ltagr",
  },
  {
    src: "./images/tennis/vcoregametagr.png",
    alt: "vcoregametagr",
  },
  {
    src: "./images/tennis/vcore_pro_97(2021).jpg",
    alt: "vcore_pro_97(2021)",
  },
  {
    src: "./images/tennis/vcore_pro_97d(2021).jpg",
    alt: "vcore_pro_97d(2021)",
  },
  {
    src: "./images/tennis/vcore_pro_97h(2021).jpg",
    alt: "vcore_pro_97h(2021)",
  },
  {
    src: "./images/tennis/vcore_pro_97.jpg",
    alt: "vcore_pro_97",
  },
  {
    src: "./images/tennis/vcore_pro_97hd.jpg",
    alt: "vcore_pro_97hd",
  },
  {
    src: "./images/tennis/vcore_pro_97.jpg",
    alt: "vcore_pro_97",
  },
  {
    src: "./images/tennis/ezone_98_7th_2022.jpg",
    alt: "ezone_98_7th_2022",
  },
  {
    src: "./images/tennis/ezone_98l_7th_2022.jpg",
    alt: "ezone_98l_7th_2022",
  },
  {
    src: "./images/tennis/ezone_100_7th_2022.jpg",
    alt: "ezone_100_7th_2022",
  },
  {
    src: "./images/tennis/ezone_game_7th_2022.jpg",
    alt: "ezone_game_7th_2022",
  },
  {
    src: "./images/tennis/ezone_98_limited_edition.jpg",
    alt: "ezone_98_limited_edition",
  },
  {
    src: "./images/tennis/ezone_100_limited_edition.jpg",
    alt: "ezone_100_limited_edition",
  },
  {
    src: "./images/tennis/vcore_sv_95.jpg",
    alt: "vcore_sv_95",
  },
  {
    src: "./images/tennis/vcore_sv_98.jpg",
    alt: "vcore_sv_98",
  },
  {
    src: "./images/tennis/vcore_sv_100.jpg",
    alt: "vcore_sv_100",
  },
  {
    src: "./images/tennis/vcore_sv_100s.jpg",
    alt: "vcore_sv_100s",
  },
  {
    src: "./images/tennis/vcore_sv_105.jpg",
    alt: "vcore_sv_105",
  },
  {
    src: "./images/tennis/vcore_sv_team.jpg",
    alt: "vcore_sv_team",
  },
  {
    src: "./images/tennis/ezone_dr_98(blue_color).jpg",
    alt: "ezone_dr_98(blue_color)",
  },
  {
    src: "./images/tennis/ezone_dr_100(blue_color).jpg",
    alt: "ezone_dr_100(blue_color)",
  },
  {
    src: "./images/tennis/ezone_dr_98.jpg",
    alt: "ezone_dr_98",
  },
  {
    src: "./images/tennis/ezone_dr_100.jpg",
    alt: "ezone_dr_100",
  },
  {
    src: "./images/tennis/ezone_dr_lite.jpg",
    alt: "ezone_dr_lite",
  },
  {
    src: "./images/tennis/ezone_dr_feel.jpg",
    alt: "ezone_dr_feel",
  },
  //clothes
  {
    src: "./images/clothes/223TS015M_223TS016F.png",
    alt: "223TS015M_223TS016F",
  },
  {
    src: "./images/clothes/221TS001M_221TS002F.png",
    alt: "221TS001M_221TS002F",
  },
  {
    src: "./images/clothes/221TS011M_221TS012F.png",
    alt: "221TS011M_221TS012F",
  },
  {
    src: "./images/clothes/213TS001M_213TS002F.png",
    alt: "213TS001M_213TS002F",
  },
  {
    src: "./images/clothes/213TS013M_213TS014F.png",
    alt: "213TS013M_213TS014F",
  },
  {
    src: "./images/clothes/223TS011M_223TS012F.png",
    alt: "223TS011M_223TS012F",
  },
  {
    src: "./images/clothes/219PH001M.png",
    alt: "219PH001M",
  },
  {
    src: "./images/clothes/221PH001M.png",
    alt: "221PH001M",
  },
  {
    src: "./images/clothes/201WP018F_201WP017M.png",
    alt: "201WP018F_201WP017M",
  },
  {
    src: "./images/clothes/COUPLE-KNIT_36210_36209.png",
    alt: "COUPLE-KNIT_36210_36209",
  },
  {
    src: "./images/clothes/223PS001F.png",
    alt: "223PS001F",
  },
  {
    src: "./images/clothes/211PS001F.png",
    alt: "211PS001F",
  },
  {
    src: "./images/clothes/223WU001M_223WP001M.png",
    alt: "223WU001M_223WP001M",
  },
  {
    src: "./images/clothes/223WU009U_223WP009U.png",
    alt: "223WU009U_223WP009U",
  },
  {
    src: "./images/clothes/221WU002F_221WP002F.png",
    alt: "221WU002F_221WP002F",
  },
  {
    src: "./images/clothes/221WU005M_221WP005M.png",
    alt: "221WU005M_221WP005M",
  },
  {
    src: "./images/clothes/221WU008F_221WP008F.png",
    alt: "221WU008F_221WP008F",
  },
  {
    src: "./images/clothes/213WU005M_213WP005M.png",
    alt: "213WU005M_213WP005M",
  },
  {
    src: "./images/clothes/79CC001U.png",
    alt: "79CC001U",
  },
  {
    src: "./images/clothes/99BN001U.png",
    alt: "99BN001U",
  },
  {
    src: "./images/clothes/229TW002U.png",
    alt: "229TW002U",
  },
  {
    src: "./images/clothes/AC1901.png",
    alt: "AC1901",
  },
  {
    src: "./images/clothes/AC108WEX_Wave_Grap_Pure.jpg",
    alt: "AC108WEX_Wave_Grap_Pure",
  },
  {
    src: "./images/clothes/AS-50.png",
    alt: "AS-50",
  },
  {
    src: "./images/clothes/229BT006U.png",
    alt: "229BT006U",
  },
  {
    src: "./images/clothes/209BT003U.png",
    alt: "209BT003U",
  },
  {
    src: "./images/clothes/219BT005U.png",
    alt: "219BT005U",
  },
  {
    src: "./images/clothes/SHB_65Z3MEX.png",
    alt: "SHB_65Z3MEX",
  },
  {
    src: "./images/clothes/SHB_57EX.png",
    alt: "SHB_57EX",
  },
  {
    src: "./images/clothes/SHB_31EX.png",
    alt: "SHB_31EX",
  },
];

const astrox100zz = new Product(
  "astrox 100",
  imgArr[0].src,
  imgArr[0].alt,
  "4U (Ave.83g) G5, 3U (Ave.88g) G5",
  "EXTRA STIFF",
  "Dark Navy",
  "하이퍼슬림 샤프가 이끄는 강력한 파워와 스피드 2020년 요넥스 플래그십 라켓으로 아스트록스 특유의 날카롭고 파워풀한 스매시, 타구 시 홀딩력은 그대로, 보다 빠른 연속 공격, 공수 전환을 위한 조작성이 더해졌습니다",
  `프레임: HM Graphite, Namd, Tungsten, Black Micro Core, Nanometric<br>샤프트: HM Graphite, Namd`,
  "새로운 내장형 T-조인트",
  "에어로+박스 프레임",
  "아이소메트릭",
  "새로운 그로메트 패턴",
  "VDM",
  "블랙 마이크로 코어"
);
const astrox99Pro = new Product(
  "astrox 99 pro",
  imgArr[1].src,
  imgArr[1].alt,
  "4U (Ave.83g) G5",
  "STIFF",
  "White tiger, cherry sunburst",
  "하이퍼슬림 샤프가 이끄는 강력한 파워와 스피드 2020년 요넥스 플래그십 라켓으로 아스트록스 특유의 날카롭고 파워풀한 스매시, 타구 시 홀딩력은 그대로, 보다 빠른 연속 공격, 공수 전환을 위한 조작성이 더해졌습니다",
  `프레임: Highly elastic carbon + VOLUME CUT RESIN + Tungsten<br>샤프트: Highly elastic carbon + Namd`,
  "새로운 내장형 T-조인트",
  "에어로+박스 프레임",
  "아이소메트릭",
  "엑스트라 슬림 샤프트",
  "로테이셔널 제너레이터 시스템",
  "블랙 마이크로 코어"
);
const astrox88Pro = new Product(
  "astrox 88s pro",
  imgArr[2].src,
  imgArr[2].alt,
  "4U (Ave.83g) G5 / 3U (Ave.88g) G5",
  "STIFF",
  "EMERALD BLUE",
  "전위 플레이 시 결정적인 공격을 통해 득점으로 연결시키는 플레이를 위한 라켓으로 새로 적용된 'VOLUME CUT RESIN' 소재를 사용해 이전에 비해 더욱 넓어진 그로메트 홀을 제공, 볼 홀딩력이 향상되고 S의 특성에 맞춘 홀 배치로 한층 향상된 성능을 제공합니다.",
  `프레임 : HM Graphite, VOLUME CUT RESIN, Tungsten,<br>샤프트 : H.M. Graghite, Namd`,
  "새로운 내장형 T-조인트",
  "아이소메트릭",
  "AERO + BOX FRAME 공기역학적",
  "솔리드 필 코어",
  "Rotational Generator System",
  "에너지 부스트 캡/플러스"
);
const astrox88D = new Product(
  "astrox 88d",
  imgArr[3].src,
  imgArr[3].alt,
  "4U (Ave.83g) G5 / 3U (Ave.88g) G5",
  "Stiff",
  "OFff-White / Red",
  "이용대가 개발에 참여한 복식 플레이어들의 최상의 퍼포먼스를 위한 독창적인 디자인의 ASTROX 88은 후위에서 강한 공격으로 상대를 무너뜨리는 기회를 만들고, 전위에서 결정적인 공격으로 득점으로 연결시키는 복식 플레이를 완성시킵니다. ASTROX 88D : 후위 플레이 시 압도적인 공격을 통한 경기 주도권. 후위 플레이 시 힘의 극대화. 강력한 스매시로 상대 제압.",
  `프레임: H.M. GRAPHITE, NANOMETRIC, Tungsten<br>샤프트: H.M. Graphite, Namd`,
  "새로운 내장형 T-조인트",
  "아이소메트릭",
  "솔리드 필 코어",
  "AERO + BOX FRAME 공기역학적",
  "새로운 프레임 디자인&라켓 길이",
  "새로운 에너지 부스트 캡"
);
const astrox77 = new Product(
  "astrox 77",
  imgArr[4].src,
  imgArr[4].alt,
  "4U (Ave.83g) G5 / 3U (Ave.88g) G5",
  "Medium",
  "Shine Yellow, Metallic Blue",
  "향상된 파워와 컨트롤로 공격을 이끌어 내는 YONEX의 새로운 라켓 시리즈",
  `프레임: H.M. GRAPHITE, NANOMETRIC, Tungsten<br>샤프트: H.M. GRAPHITE, Namd`,
  "새로운 내장형 T-조인트",
  "아이소메트릭",
  "솔리드 필 코어",
  "AERO + BOX FRAME 공기역학적",
  "새로운 컨트롤 서포트 캡",
  "Namd"
);
const astrox66 = new Product(
  "astrox 66",
  imgArr[5].src,
  imgArr[5].alt,
  "4U (Ave.83g) G5",
  "Hi-Flex",
  "Mist Purple",
  "스매시 뿐만 아니라 향상된 리시브를 가능하게 하는 아스트록스 시리즈의 여성 동호인을 위한 모델",
  `프레임: H.M. GRAPHITE, NANOMETRIC, Tungsten, Tough G Fiber<br>샤프트: H.M. Graphite, Namd`,
  "namd",
  "아이소메트릭",
  "새로운 그로메트 패턴",
  "컨트롤 서포트 캡",
  "터프 G 파이버",
  "나노메트릭"
);
const nanoflare700 = new Product(
  "nanoflare 700",
  imgArr[6].src,
  imgArr[6].alt,
  "5U (Avg. 78g) G5 / 4U (Avg. 83g) G5",
  "Medium",
  "Cyan, Magenta",
  "한국 국가대표 선수들이 가장 많이 사용 중인 국민라켓, 편안한 스윙, 부드로운 홀딩이 특징.",
  "HM Graphite / M40X / SUPER HMG",
  "슈퍼 하이 모듈러스 그라파이트",
  "에어로 프레임",
  "TORAYCA(r) M40X",
  "슈퍼 슬림 샤프트",
  "소닉 플레어 시스템",
  "아이소메트릭"
);

const nanoflare555 = new Product(
  "nanoflare 555",
  imgArr[7].src,
  imgArr[7].alt,
  "4U(Avg. 83g) G5",
  "stiff",
  "matte white",
  "렉시스 샤프트가 만드는 부드럽고 빠른 반발력, 강력한 타구감. 파워 히터에게 최적화된 라켓",
  "HM Graphite / NANOCELL NEO / EX-HMG / Solid Titanium",
  "아이소매트릭",
  "렉시스 샤프트",
  "울트라 슬림 롱 샤프트",
  "나노셀 네오",
  "소닉 플레어 시스템",
  "에어로프레임"
);
const nanoflare170 = new Product(
  "nanoflare 170 (2022model)",
  imgArr[8].src,
  imgArr[8].alt,
  "5U (Avg. 78g) G5",
  "Hi-flex",
  "black / orange,black / blue",
  "최고 가성비의 동호인 입문용 라켓 2022년 새로운 디자인으로 출시",
  "Graphite / NANOCELL NEO / HM Graphite ",
  "내장형 T-조인트",
  "아이소메트릭",
  "나노셀 네오",
  "컨트롤 서포트 캡",
  "새로운 그로메트 패턴",
  "슈퍼 슬림 프레임"
);
const nanoflareX7 = new Product(
  "nanoflare X7 (2021 model)",
  imgArr[9].src,
  imgArr[9].alt,
  "4U (Ave.83g) G5",
  "Extra Hi-flex",
  "BLACK / MINT",
  "더욱 업그레이드된 디자인과 밸런스로 출시된 X7 2는 신소재 'M40X'와 새로운 에어로 프레임이 적용되어 한국 동호인의 니즈에 맞춘 샤프트 탄성으로 편하고 부드러운 샷을 제공하는 라켓입니다.",
  `프레임 : H.M. Graphite, M40X, SUPER HMG, Vibslayer Carbon<br>샤프트 : H.M. Graphite`,
  "새로운 내장형 T-조인트",
  "아이소메트릭",
  "새로운 그로메트 패턴",
  "컨트롤 서포트 캡",
  "새로운 컨트롤 서포트 캡",
  "에어로 프레임"
);
const nanoflare001Clear = new Product(
  "nanoFLARE 001 Clear",
  imgArr[10].src,
  imgArr[10].alt,
  "5U (Ave.78g) G5",
  "HI-FLEX",
  "green",
  "혁신적 소재인 Graphite가 라켓 상하부에 배치되어 안정성과 반발력을 제공 셔틀 가속의 최대화를 위한 타의 추종을 불허하는 힘과 안정성을 제공합니다.",
  `프레임 : Graphite<br>샤프트 : Graphite`,
  "아이소메트릭",
  "컨트롤 서포트 캡",
  "에어로 프레임",
  "어드밴스드 플레어 시스템",
  "새로운 그로메트 패턴",
  "라이트 프레임"
);
const nanoflare001Feel = new Product(
  "nanoFLARE 001 Feel",
  imgArr[11].src,
  imgArr[11].alt,
  "5U (Ave.78g) G5",
  "hi-flex",
  "violet",
  "풀 그라파이트 소재의 레저 라켓으로 소닉플레어 시스템과 소재의 가벼움을 통해 레저 라켓에서 경험하기 힘든 플레이를 구현",
  `프레임 : Graphite<br>샤프트 : Graphite`,
  "아이소메트릭",
  "컨트롤 서포트 캡",
  "에어로 프레임",
  "새로운 내장형 T-조인트",
  "나노셀 네오",
  "렉시스 프레임"
);
const duoraZStrike = new Product(
  "duora Z Strike",
  imgArr[12].src,
  imgArr[12].alt,
  "3U (Ave.88g) G5",
  "Extra Stiff",
  "black / white",
  "코트 어디에나 공격적인 파워의 포핸드와 백핸드 동시 구현 가능. 정교한 제작으로 중상급 플레이어에 적합한 파워, 스피드, 컨트롤 제공",
  `프레임: H.M. Graphite, NANOMETRIC DR, Hyper-MG<br>샤프트: H.M. Graphite, NANOMETRIC, EX-HMG`,
  "듀얼 옵티멈 시스템",
  "T-앵커",
  "컴팩트 프레임",
  "수평 A 컨셉트",
  "듀오라 그로메트",
  "나노메트릭 dr"
);
const duora10 = new Product(
  "duora 10",
  imgArr[13].src,
  imgArr[13].alt,
  "3U (Ave.88g) G5",
  "stiff",
  "Blue / Orange, Green / Orange",
  "2015년 9월 출시된 DUORA 10. 파워를 위한 박스 프레임과 스피드를 위한 에어로 다이나믹 프레임의 최적 조합으로 강력한 포핸드와 경쾌한 백핸드드라이브가 가능, 2017년 9월 새로운 컬러 Blue/Orange 출시",
  `프레임: H.M. Graphite, NANOMETRIC DR, Ni-Ti Fiber<br>샤프트: H.M. Graphite, NANOMETRIC`,
  "듀얼 옵티멈 시스템",
  "새로운 내장형 T-조인트",
  "아이소메트릭",
  "솔리드 필 코어",
  "새로운 그로메트 패턴",
  "나노메트릭"
);
const duora10Lt = new Product(
  "duora 10 LT",
  imgArr[14].src,
  imgArr[14].alt,
  "4U (Ave.83g) G5",
  "stiff",
  "pink / yellow",
  "보다 가벼워진 프레임과 더욱 부드러워진 타격감이 결합된 강한 타구의 공격형 플레이어를 위한 DUORA 10 LT. 무게와 샷 감각 때문에 DUORA 10에 접근이 어려웠던 여성, 주니어, 시니어들이 사용하기 좋도록 개발된 라켓.",
  `프레임: H.M. Graphite, NANOMETRIC DR, Nickel-Titanium Fiber, VIBSLAYER CARBON<br>샤프트: H.M. Graphite, NANOMETRIC`,
  "VIBSLAYER CARBON",
  "슈퍼 슬림 롱 샤프트",
  "AERO + BOX FRAME 공기역학적",
  "듀얼 옵티멈 시스템",
  "새로운 내장형 T-조인트",
  "아이소메트릭"
);
const duora9 = new Product(
  "duora 9",
  imgArr[15].src,
  imgArr[15].alt,
  "4U (Ave.83g) G5",
  "stiff",
  "magenta",
  "듀오라 시리즈의 4U 무게에 대한 니즈에 맞춰 출시된 모델로 듀오라 10과 동일한 스펙에 보다 가벼운 4U 무게 적용. 파워를 위한 박스 프레임과 스피드를 위한 에어로 다이나믹 프레임의 최적 조합으로 강력한 포핸드와 경쾌한 백핸드 드라이브가 가능.",
  `프레임: H.M. Graphite, NANOMETRIC DR, Ni-Ti Fiber<br>샤프트: H.M. Graphite, NANOMETRIC`,
  "듀얼 옵티멈 시스템",
  "새로운 내장형 T-조인트",
  "아이소메트릭",
  "aero + box frame 공기역학적",
  "나노메트릭",
  "솔리드 필 코어"
);
const duora7 = new Product(
  "duora 7",
  imgArr[16].src,
  imgArr[16].alt,
  "3U (Ave.88g) G5",
  "stiff / medium",
  "red",
  "포핸드 클리어와 백핸드 리시브로 코트 위에서 우위를 점하게 하는 올라운드형 모델",
  `프레임: H.M. Graphite + NANOMETRIC DR + IC ELASTOMER<br>샤프트: H.M. Graphite + Ultra PEF`,
  "ic 엘라스토머",
  "울트라 pef",
  "새로운 내장형 T-조인트",
  "듀얼 옵티멈 시스템",
  "컨트롤 플러스",
  "나노메트릭 dr"
);
const duora6 = new Product(
  "duora 6",
  imgArr[17].src,
  imgArr[17].alt,
  "4U (Ave.83g) G5",
  "hi-flex",
  "shine pink",
  "향상된 포핸드 클리어와 백핸드 리시브를 제공하는 올라운드형 DUORA 6 라켓.",
  `프레임: H.M. Graphite, Nanometric DR, Vibslayer Carbon<br>샤프트: H.M. Graphite, Nanometric`,
  "새로운 내장형 T-조인트",
  "듀얼 옵티멈 시스템",
  "vibslayer carbon",
  "새로운 그로메트 패턴",
  "아이소메트릭",
  "슈퍼 슬림 롱 샤프트"
);
const arcsavor11Pro = new Product(
  "arcsavor 11 pro",
  imgArr[18].src,
  imgArr[18].alt,
  "4U (Ave.83g) G5 / 3U (Ave.88g) G5",
  "stiff",
  "grayish pearl",
  "아크세이버 11의 새로운 진화. 셔틀콕 홀딩력을 강화시켜 새로운 레벨의 셔틀콕 컨트롤 제공",
  `프레임: HM Graphite<br>샤프트: POCKETING BOOSTER`,
  "포켓팅 부스터",
  "컨트롤 어시스트 범퍼",
  "슈퍼 하이 모듈러스 그라파이트",
  "박스 프레임",
  "에너지 부스트 캡/플러스",
  "울트라 pef"
);
const arcsavor10 = new Product(
  "arcsavor 10(2022 model)",
  imgArr[19].src,
  imgArr[19].alt,
  "4U (Ave.83g) G5",
  "stiff",
  "red",
  "명작의 귀환. 2000년대 레전드 선수들이 가장 사랑했던 올라운드형 라켓. 첫 4U 버전 출시",
  `프레임: H.M. Graphite + Neo CS CARBON NANOTUBE + SUPER HMG<br>샤프트: H.M. Graphite + Ultra PEF`,
  "새로운 내장형 T-조인트",
  "컵-스택 카본 나노튜브",
  "aero + box frame 공기역학적",
  "울트라 pef",
  "솔리드 필 코어",
  "새로운 그로메트 패턴"
);
const arcsavor11New = new Product(
  "arcsaver 11(2020 model)",
  imgArr[20].src,
  imgArr[20].alt,
  "4U (Ave.83g) G5",
  "stiff",
  "metallic red",
  "국가대표 최솔규 사용 라켓으로 올라운드형 라켓의 대명사. 첫 4u 버전 출시",
  `프레임: H.M. Graphite + Neo CS CARBON NANOTUBE + SONIC METAL<br>샤프트: H.M. Graphite + Ultra PEF`,
  "네오 cs 카본 나노튜브",
  "소닉 메탈",
  "aero + box frame 공기역학적",
  "아이소메트릭",
  "솔리드 필 코어",
  "t-앵커"
);
const arcsavor2I = new Product(
  "arcsavor 2i",
  imgArr[21].src,
  imgArr[21].alt,
  "3U (Ave.88g) G5",
  "stiff",
  "black / orange",
  "정교한 컨트롤과 날카로운 각도의 스매시로 경기를 리드하는 이븐 밸런스의 라켓",
  `프레임 : Carbon, Cup Stacked Carbon Nanotubes<br>샤프트 : Carbon Shaft`,
  "내장형 T-조인트",
  "아이소메트릭",
  "컨트롤 어시스트 범퍼",
  "솔리드 필 코어",
  "aero + box frame 공기역학적",
  "박스형 구조의 프레임"
);
const arcsavor11 = new Product(
  "arcsavor 11",
  imgArr[22].src,
  imgArr[22].alt,
  "3U (85 - 89.9g) G5",
  "stiff",
  "metallic red / red",
  "2013년 출시 된 라켓으로 네오 컵-스텍 카본 나노튜브가 짜릿한 타격감을 제공하여 소닉 메탈로 고 반발력, 속사포 같은 반격이 가능한 라켓. 2017년 8월 New Design(Metallic Red) 출시",
  `프레임: H.M. Graphite + Neo CS CARBON NANOTUBE + SONIC METAL<br>샤프트: H.M. Graphite + Ultra PEF`,
  "네오 cs 카본 나노튜브",
  "소닉 메탈",
  "아이소메트릭",
  "t-앵커",
  "새로운 그로메트 패턴",
  "aero + box frame"
);
const arcsavorFb = new Product(
  "acrsavor FB",
  imgArr[23].src,
  imgArr[23].alt,
  "F(73g) / G5, 5U(75-79.9g) / G5",
  "stiff",
  "Red / Blue, Sonic Blue",
  "2015년 New Color(Red/Bule)출시, 나노 메트릭이 만든 초경량 라켓으로 빠른 스윙 스피드 실현",
  `프레임: H.M. Graphite + CS CARBON NANOTUBE<br>샤프트: H.M. Graphite + NANOMETRIC`,
  "새로운 내장형 T-조인트",
  "cs 카본 나노튜브",
  "aero + box frame",
  "아이소메트릭",
  "컨트롤 서포트 범퍼",
  "나노메트릭"
);
const nanorayGlanZ = new Product(
  "nanoray glan z",
  imgArr[24].src,
  imgArr[24].alt,
  "4U (Ave.83g) G5",
  "flexible",
  "Navy / Turquoise, Brilliant Black",
  "새로운 REXIL FIBER 소재와 Torque Power Theory를 기반으로 셔틀콕을 더 멀리 보낼 수 있도록 설계. 2017년 8월 New Design(Navy/Turquoise) 출시",
  `프레임: H.M. Graphite, REXIL FIBER, NANOMETRIC<br>샤프트: H.M. Graphite, NANOMETRIC, X-FULLERENE`,
  "새로운 내장형 T-조인트",
  "엑스트라 슬림 샤프트",
  "x-플러린",
  "컨트롤 서포트 캡",
  "aero + box frame 공기역학적",
  "나노메트릭"
);
const nanorayZSpeed = new Product(
  "nanoray z-speed",
  imgArr[25].src,
  imgArr[25].alt,
  "3U (85-89.9g) / G5",
  "stiff",
  "Lime Yellow / High Orange",
  "지구상에서 가장 빠른 라켓 2010년 세계에서 가장 빠른 라켓 속도 421km/h를 기록한 요넥스는 2013년 NANORAY Z-SPEED로 493km/h라는 놀라운 기록을 한번 더 세우게 되었습니다. HORIZONTAL-A 가 유연성을 극대화하여 스윗 스팟을, SBZ가 폭발적인 가속력과 파워를 증가 시킵니다. 아울러 SONIC METAL이 높은 반발력과 경쾌한 타구음을 제공합니다. 2016년 Lime Yellow 컬러 출시",
  `프레임: H.M. Graphite, SONIC METAL, EX-HMG<br>샤프트: H.M. Graphite, NANOMETRIC, X-FULLERENE`,
  "스냅 백 존",
  "스윙 스피드 10% 증가",
  "컴팩트 프레임",
  "수평-A 컨셉트",
  "소닉 메탈",
  "x-플러린"
);
const nanoray900 = new Product(
  "nanoray 900",
  imgArr[26].src,
  imgArr[26].alt,
  "3U (85-89.9g) / G5",
  "stiff",
  "Blue / Navy, Iron Gray",
  "NANORAY 주요 특성인 스피드와 좀 더 날카로운 각도의 스매쉬 제공 고반발력과 견고한 느낌으로 빠른 랠리로 향상된 파워와 컨트롤 제공 프레임 양쪽 중간 부분이 더 얇아 셔틀콕이 좀 더 오랫동안 면에 머물러 날카로운 스매시 구현. 2017년 8월 New Design(Blue/Navy) 출시.",
  `프레임: H.M. Graphite + NANOMETRIC + Super HMG<br>샤프트: H.M. Graphite + X-FULLERENE + Ultra PEF`,
  "새롭게 진화한 프레임 디자인-사이드",
  "새롭게 진화한 프레임 디자인-톱",
  "슈퍼 슬림 롱 샤프트",
  "X-풀러린",
  "울트라 PEF",
  "에어로 프레임"
);
const nanoray800 = new Product(
  "nanoray 800",
  imgArr[27].src,
  imgArr[27].alt,
  "4U (80-84.9g) / G5 3U (85-89.9g) / G5",
  "stiff",
  "Black / Magenta, Flash Blue",
  "2012년 출시된 라켓으로 소닉 메탈과 결합한 X-풀러린이 강력하고 정확한 속사포 같은 샷을 가능하게하며 빠르면서도 컨트롤을 갖춘 스윙을 제공. 2017년 New Color 출시.",
  `프레임: H.M.Graphite +SONIC METAL<br>샤프트: H.M.Graphite + X-FULLERENE`,
  "x-풀러린",
  "새로운 내장형 t-조인트",
  "아이소메트릭",
  "솔리드 필 코어",
  "슈퍼 슬림 롱 샤프트",
  "소닉 메탈"
);
const nanoray750 = new Product(
  "nanoray 750",
  imgArr[28].src,
  imgArr[28].alt,
  "4U (80-84.9g) / G5",
  "medium",
  "shine gold",
  "2013년 출시 요넥스 라켓 중 헤드가 가장 가벼운 라켓으로 나노메트릭 신소재가 헤드 부위에 적용",
  `프레임: H.M Graphite, NANOMETRIC<br>샤프트: H.M. Graphite, X-FULLERENE`,
  "x-풀러린",
  "사운트 필터",
  "트랜스-웨이트 시스템",
  "새로운 내장형 t-조인트",
  "새로운 그로메트 패턴",
  "나노레이의 혁신적인 프레임 디자인"
);
const nanoray700Fx = new Product(
  "nanoray 700 fx",
  imgArr[29].src,
  imgArr[29].alt,
  "4U (80-84.9g) / G5",
  "medium",
  "white / high red",
  "2016년 NEW DESIGN 역동적이며 적극적인 경기력으로 셔틀콕을 자유자재로 컨트롤 프레임 양 측면에 내장된 접착력이 우수한 터프렉스 수지가 뛰어난 유연성과 강도를 제공 고탄력과 유연성으로 선수들이 클리어를 쉽게 구사 가능",
  `프레임: H.M.Graphite + TOUGHLEX<br>샤프트: H.M.Graphite + X-FULLERENE`,
  "터플렉스",
  "내장형 t-조인트",
  "나노레이의 혁신적인 프레임 디자인",
  "솔리드 필 코어",
  "x-풀러린",
  "아이소메트릭"
);
const vcore95 = new Product(
  "VCORE 95 TAGR (2021)",
  imgArr[30].src,
  imgArr[30].alt,
  "310g / 10.9oz",
  `밸런스: 310mm <br> 너비: 21.5mm / 22.0mm / 21.0mm`,
  "Tango Red",
  "2011년도에 출시되어 전세계적으로 꾸준히 사랑 받고있는 VCORE 시리즈의 새로운 모델. 요넥스 테니스 역사상 가장 강력한 스핀이 가능하도록 개발된 VCORE는 라켓 기동성, 볼 포켓팅이 향상되어 좀 더 쉽게 파워있고 원하는 코스로 보낼수있는 샷이 가능. 2021년 1월 15일 전세계 동시 출시",
  "HM Graphite / 2G-Namd Flex Force / VDM",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "에어로 트렌치",
  "vdm",
  "라이너 테크"
);
const vcore98 = new Product(
  "VCORE 98 TAGR (2021)",
  imgArr[31].src,
  imgArr[31].alt,
  `G: 305g / 10.8oz <br> LG: 285g / 10.1oz`,
  `밸런스: 315mm , LG: 325mm <br> 너비 : 22.5 mm - 23 mm - 21 mm`,
  "Tango Red",
  "하이퍼슬림 샤프가 이끄는 강력한 파워와 스피드 2020년 요넥스 플래그십 라켓으로 아스트록스 특유의 날카롭고 파워풀한 스매시, 타구 시 홀딩력은 그대로, 보다 빠른 연속 공격, 공수 전환을 위한 조작성이 더해졌습니다",
  "2G-Namd(2세대 Namd) / M40X / VDM(진동흡수 그립) / H.M. Graphite / NANOMETRIC XT / Namd",
  "아이소메트릭",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "vdm",
  "에어로 트렌치",
  "에어로 핀 기술"
);
const vcore98L = new Product(
  "VCORE 98L TAGR (2021)",
  imgArr[32].src,
  imgArr[32].alt,
  "285 g / 10.1 oz",
  `밸런스: 325mm <br> 너비: 22.5 mm - 23 mm - 21 mm`,
  "tango red",
  "하이퍼슬림 샤프가 이끄는 강력한 파워와 스피드 2020년 요넥스 플래그십 라켓으로 아스트록스 특유의 날카롭고 파워풀한 스매시, 타구 시 홀딩력은 그대로, 보다 빠른 연속 공격, 공수 전환을 위한 조작성이 더해졌습니다",
  "HM Graphite / 2G-Namd Flex Force / VDM",
  "아이소메트릭",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "vdm",
  "에어로 트렌치",
  "에어로 핀 기술"
);
const vcore100 = new Product(
  "VCORE 100 TAGR (2021)",
  imgArr[33].src,
  imgArr[33].alt,
  "300 g / 10.6 oz",
  `밸런스: 320mm <br> 너비: 24 mm - 25 mm - 22 mm`,
  "tango red",
  "2011년도에 출시되어 전세계적으로 꾸준히 사랑 받고있는 VCORE 시리즈의 새로운 모델. 요넥스 테니스 역사상 가장 강력한 스핀이 가능하도록 개발된 VCORE는 라켓 기동성, 볼 포켓팅이 향상되어 좀 더 쉽게 파워있고 원하는 코스로 보낼수있는 샷이 가능. 2021년 1월 15일 전세계 동시 출시",
  "HM Graphite / 2G-Namd Flex Force / VDM",
  "아이소메트릭",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "vdm",
  "에어로 트렌치",
  "에어로 핀 기술"
);
const vcore100L = new Product(
  "VCORE 100L TAGR (2021)",
  imgArr[34].src,
  imgArr[34].alt,
  "280 g / 9.9 oz",
  `밸런스: 320mm <br> 너비: 24 mm - 25 mm - 22 mm` ,
  "tango red",
  "2011년도에 출시되어 전세계적으로 꾸준히 사랑 받고있는 VCORE 시리즈의 새로운 모델. 요넥스 테니스 역사상 가장 강력한 스핀이 가능하도록 개발된 VCORE는 라켓 기동성, 볼 포켓팅이 향상되어 좀 더 쉽게 파워있고 원하는 코스로 보낼수있는 샷이 가능. 2021년 1월 15일 전세계 동시 출시",
  "HM Graphite / 2G-Namd Flex Force / VDM",
  "아이소메트릭",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "vdm",
  "에어로 트렌치",
  "라이너 테크"
);
const vcoreGameTour = new Product(
  "VCORE GAME TAGR (2021)",
  imgArr[35].src,
  imgArr[35].alt,
  "270g / 9.5o",
  `밸런스: 330mm <br> 너비: 24 mm - 26 mm - 22 mm`,
  "tango red",
  "2011년도에 출시되어 전세계적으로 꾸준히 사랑받고 있는 VCORE 시리즈의 새로운 모델. 요넥스 테니스 역사상 가장 강력한 스핀이 가능하도록 개발된 VCORE는 라켓 기동성, 볼 포켓팅이 향상되어 좀더 쉽게 파워 있고 원하는 코스로 보낼 수 있는 샷이 가능.",
  "H.M. Graphite, NANOMETRIC XT, NANOMESH NEO",
  "아이소메트릭",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "vdm",
  "에어로 트렌치",
  "에어로 핀 기술"
);
const vcorePro97New = new Product(
  "VCORE PRO 97 (2021)",
  imgArr[36].src,
  imgArr[36].alt,
  "310 g / 10.9 oz",
  `밸런스: 310mm <br> 너비: 21 mm - 21 mm - 21 mm`,
  "Green / Purple",
  "컨트롤과 타구감을 갖춘 유연한 라켓으로 공격적인 플레이를 원하는 중급 및 상급 플레이어에 적합한 라켓.",
  "2G-Namd Flex Force / Flex Fuse / HM Graphite / VDM",
  "아이소매트릭",
  "플렉스콘 시스템",
  "플렉스 퓨즈",
  "2G-Namd Flex Force",
  "vdm",
  "블랙 마이크로 코어"
);

const vcorePro97D = new Product(
  "VCORE PRO 97D (2021)",
  imgArr[37].src,
  imgArr[37].alt,
  "320 g / 11.3 oz",
  `밸런스: 310mm <br> 너비: 21 mm - 21 mm - 21 mm`,
  "Green / Purple",
  "컨트롤과 타구감을 갖춘 유연한 라켓으로 공격적인 플레이를 원하는 중급 및 상급 플레이어에 적합한 라켓.",
  "2G-Namd Flex Force / Flex Fuse / HM Graphite / VDM",
  "아이소매트릭",
  "플렉스콘 시스템",
  "플렉스 퓨즈",
  "2G-Namd Flex Force",
  "vdm",
  "블랙 마이크로 코어"
);
const vcorePro97H = new Product(
  "VCORE PRO 97H (2021)",
  imgArr[38].src,
  imgArr[38].alt,
  "320 g / 11.3 oz",
  `밸런스: 310mm <br> 너비: 21 mm - 21 mm - 21 mm`,
  "Green / Purple",
  "컨트롤과 타구감을 갖춘 유연한 라켓으로 공격적인 플레이를 원하는 중급 및 상급 플레이어에 적합한 라켓.",
  "2G-Namd Flex Force / Flex Fuse / HM Graphite / VDM",
  "아이소매트릭",
  "플렉스콘 시스템",
  "플렉스 퓨즈",
  "2G-Namd Flex Force",
  "vdm",
  "블랙 마이크로 코어"
);
const vcorePro97 = new Product(
  "VCORE PRO 97",
  imgArr[39].src,
  imgArr[39].alt,
  `HG: 310 g / 11.6 oz <br> G: 310g / 10.9oz <br> LG: 290g / 10.2oz`,
  `밸런스: HG/G 310mm / LG 325mm <br> 너비: 20 mm - 20 mm - 20 mm`,
  "Matte Green",
  "기존 혁신 소재 Namd에 VDM 적용, 파워에 안정성을 위한 컨트롤까지 향상시킨 새로운 VCORE PRO. 정현과 스탄 바브린카가 2019 US 오픈부터 사용 예정.",
  "VDM / HM Graphite / BLACK MICRO CORE / Namd",
  "락 부스터 시스템",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "namd",
  "vdm",
  "블랙 마이크로 코어"
);
const vcorePro97Hd = new Product(
  "VCORE PRO 97HD",
  imgArr[40].src,
  imgArr[40].alt,
  `G: 320g / 11.3oz`,
  `밸런스: 310mm <br> 너비: 20 mm - 20 mm - 20 mm`,
  "Matte Green",
  "기존 혁신 소재 Namd에 VDM 적용, 파워에 안정성을 위한 컨트롤까지 향상시킨 새로운 VCORE PRO. 정현과 스탄 바브린카가 2019 US 오픈부터 사용 예정.",
  "VDM / HM Graphite / BLACK MICRO CORE / Namd",
  "락 부스터 시스템",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "namd",
  "vdm",
  "블랙 마이크로 코어"
);
const vcorePro100 = new Product(
  "VCORE PRO 100",
  imgArr[41].src,
  imgArr[41].alt,
  `G: 300g / 10.6oz <br> LG: 280g / 9.9oz`,
  `밸런스: G 310mm / LG 335mm <br> 너비: 20 mm - 20 mm - 20 mm`,
  "Matte Green",
  "기존 혁신 소재 Namd에 VDM 적용, 파워에 안정성을 위한 컨트롤까지 향상시킨 새로운 VCORE PRO. 정현과 스탄 바브린카가 2019 US 오픈부터 사용 예정.",
  "VDM / HM Graphite / BLACK MICRO CORE / Namd",
  "락 부스터 시스템",
  "슈퍼 쿠션 그립",
  "3D 벡터 샤프트",
  "namd",
  "vdm",
  "블랙 마이크로 코어"
);
const ezone98 = new Product(
  "EZONE 98 (7th/2022)",
  imgArr[42].src,
  imgArr[42].alt,
  "305g / 10.8oz",
  `밸런스: 315mm / plus(+) 325mm <br> 너비: 23.5 mm - 24.5 mm - 19.5 mm`,
  "Sky Blue",
  "조절 가능한 파워와 편안한 타구감으로 경기의 우위를 점하길 원하는 중급 및 상급 플레이어에 적합한 라켓.",
  `HM GRAPHITE / 2G-Nam%{&#8482;} SPEED / VDM`,
  "Oval Pressed Shaft",
  "에어로 쉐이프",
  "샤프트 디자인",
  "확장된 아이소메트릭",
  "2g-namd-speed",
  "vdm"
);
const ezone98L = new Product(
  "EZONE 98L (7th/2022)",
  imgArr[43].src,
  imgArr[43].alt,
  "285g / 10.1oz",
  `밸런스: 330mm <br> 너비: 23.5 mm - 24.5 mm - 19.5 mm`,
  "sky blue",
  "조절 가능한 파워와 편안한 타구감으로 경기의 우위를 점하길 원하는 중급 및 상급 플레이어에 적합한 라켓.",
  `HM GRAPHITE / 2G-Nam%{&#8482;} SPEED / VDM`,
  "Oval Pressed Shaft",
  "에어로 쉐이프",
  "샤프트 디자인",
  "확장된 아이소메트릭",
  "2g-namd-speed",
  "vdm"
);
const ezone100 = new Product(
  "EZONE 100 (7th/2022)",
  imgArr[44].src,
  imgArr[44].alt,
  "300g / 10.6oz",
  `밸런스: 320mm / plus(+) 330mm <br> 너비: 23.8 mm - 26.5 mm - 22.5 mm`,
  "sky blue",
  "조절 가능한 파워와 편안한 타구감으로 경기의 우위를 점하길 원하는 중급 및 상급 플레이어에 적합한 라켓.",
  `HM GRAPHITE / 2G-Nam%{&#8482;} SPEED / VDM`,
  "Oval Pressed Shaft",
  "에어로 쉐이프",
  "샤프트 디자인",
  "확장된 아이소메트릭",
  "2g-namd-speed",
  "vdm"
);
const ezoneGame = new Product(
  "EZONE GAME (7th/2022)",
  imgArr[45].src,
  imgArr[45].alt,
  "270g / 9.5oz",
  `밸런스: 330mm <br> 너비: 23.5 mm - 25 mm - 21 mm`,
  "sky blue",
  "파워와 편안함을 원하는 입문자 및 중급 플레이어에 적합한 라켓",
  "HM GRAPHITE / NANOCELL NEO / VDM",
  "Oval Pressed Shaft",
  "에어로 쉐이프",
  "샤프트 디자인",
  "확장된 아이소메트릭",
  "2g-namd-speed",
  "vdm"
);
const ezone98Limited = new Product(
  "EZONE 98 Limited Edition",
  imgArr[46].src,
  imgArr[46].alt,
  `G: 305g / 10.8oz <br> LG: 285g / 10.1oz`,
  `밸런스: G 315mm / LG 330mm <br> 너비: 23.0 mm - 24 mm - 19 mm`,
  "gold",
  "나오미 오사카의 백투백 그랜드슬램 우승 달성 및 세계 랭킹 1위 등극 기념으로 출시된 <EZONE 리미티드 에디션 Gold & Black 한정판>",
  "H.M. Graphite / NANOMETRIC DR / Quake Shut Gel Air",
  "에어로 쉐이프",
  "마이크로 오프셋 레이아웃",
  "충격방지 그로메트 시스템",
  "새로운 아이소메트릭",
  "vdm",
  "2g-namd-speed"
);
const ezone100Limited = new Product(
  "EZONE 100 Limited Edition",
  imgArr[47].src,
  imgArr[47].alt,
  `G: 300g / 10.6oz <br> LG: 285g / 10.1oz`,
  `밸런스: G 320mm / LG 325mm <br> 너비: 24.0 mm - 26 mm - 22 mm`,
  "gold",
  "나오미 오사카의 백투백 그랜드슬램 우승 달성 및 세계 랭킹 1위 등극 기념으로 출시된 <EZONE 리미티드 에디션 Gold & Black 한정판>",
  "H.M. Graphite / NANOMETRIC DR / Quake Shut Gel Air",
  "에어로 쉐이프",
  "마이크로 오프셋 레이아웃",
  "충격방지 그로메트 시스템",
  "새로운 아이소메트릭",
  "vdm",
  "Oval Pressed Shaft"
);
const vcoreSv95 = new Product(
  "VCORE SV 95",
  imgArr[48].src,
  imgArr[48].alt,
  "G: 310g / 10.9oz",
  `밸런스: 310mm <br> 너비: 21 mm - 21 mm - 20 mm`,
  "Gloss Red",
  "높은 궤도의 스핀 샷을 위해 극대화된 빠른 스윙을 원하는 파월풀한 플레이어를 위한 라켓. 2016년 8월 말 출시",
  "H.M. Graphite / BLACK MICRO CORE / NANOMETRIC XT",
  "블랙 마이크로 코어",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "새로운 에어로 핀",
  "sv 프레임",
  "vdm"
);
const vcoreSv98 = new Product(
  "VCORE SV 98",
  imgArr[49].src,
  imgArr[49].alt,
  `G: 305g / 10.8oz <br> LG: 285g / 10.1oz`,
  `밸런스: 310mm <br> 너비: 21 mm - 21 mm - 20 mm`,
  "Gloss Red",
  "높은 궤도의 스핀 샷을 위해 극대화된 빠른 스윙을 원하는 파월풀한 플레이어를 위한 라켓. 2016년 8월 말 출시",
  "H.M. Graphite / BLACK MICRO CORE / NANOMETRIC XT",
  "블랙 마이크로 코어",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "새로운 에어로 핀",
  "sv 프레임",
  "vdm"
);
const vcoreSv100 = new Product(
  "VCORE SV 100",
  imgArr[50].src,
  imgArr[50].alt,
  `G: 300g / 10.6oz <br> LG: 280g / 9.9oz`,
  `밸런스: G 320mm / LG 330mm <br> 너비: 25 mm - 25 mm - 25 mm`,
  "Gloss Red",
  "높은 궤도의 스핀 샷을 위해 극대화된 빠른 스윙을 원하는 파월풀한 플레이어를 위한 라켓. 2016년 8월 말 출시",
  "H.M. Graphite / BLACK MICRO CORE / NANOMETRIC XT",
  "블랙 마이크로 코어",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "새로운 에어로 핀",
  "sv 프레임",
  "vdm"
);
const vcoreSv100S = new Product(
  "VCORE SV 100S",
  imgArr[51].src,
  imgArr[51].alt,
  "G: 270g/9.5oz",
  `밸런스 : 330mm <br> 너비 : 25 mm - 25 mm - 25 mm`,
  "Gloss Red",
  "강력한 스핀 샷을 위한 극대화된 빠른 스윙을 제공하는 보다 가볍고, 보다 민첩한 강력한 라켓. 2016년 8월 말 출시.",
  "H.M. Graphite / BLACK MICRO CORE / NANOMETRIC XT",
  "블랙 마이크로 코어",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "새로운 에어로 핀",
  "sv 프레임",
  "트랜스 - 웨이트 시스템"
);
const vcoreSv105 = new Product(
  "VCORE SV 105",
  imgArr[52].src,
  imgArr[52].alt,
  "G: 265g / 9.3oz",
  `밸런스: 340mm <br> 너비: 26 mm - 26 mm - 23 mm`,
  "Gloss Red",
  "강력한 스핀 샷을 위한 극대화된 빠른 스윙을 제공하는 보다 가볍고, 보다 민첩한 강력한 라켓. 2016년 8월 말 출시.",
  "H.T. Graphite / NANOMETRIC XT",
  "블랙 마이크로 코어",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "새로운 에어로 핀",
  "sv 프레임",
  "트랜스 - 웨이트 시스템"
);
const vcoreSvTeam = new Product(
  "VCORE SV TEAM",
  imgArr[53].src,
  imgArr[53].alt,
  "G: 280g / 9.9oz",
  `밸런스: 335mm <br> 너비: 23 mm - 23 mm - 21 mm`,
  "Gloss Red",
  "강력한 스핀 샷을 위한 극대화된 빠른 스윙을 제공하는 보다 가볍고, 보다 민첩한 강력한 라켓. 2016년 8월 말 출시.",
  "H.T. Graphite / NANOMETRIC XT",
  "블랙 마이크로 코어",
  "3D 벡터 샤프트",
  "아이소메트릭",
  "새로운 에어로 핀",
  "sv 프레임",
  "트랜스 - 웨이트 시스템"
);
const ezoneDr98Blue = new Product(
  "EZONE DR 98 (Blue color)",
  imgArr[54].src,
  imgArr[54].alt,
  "G: 310g / 10.9oz",
  `밸런스: 310mm <br> 너비: 23 mm - 24 mm - 19 mm`,
  "black / blue",
  "EZONE 시리즈의 새로운 세대, EZONE DR의 새로운 디자인. 2016년 10월 출시. 최상급 카본 그라파이트인 나노메트릭 DR을 사용한 세계 최초의 라켓으로 보다 확대된 유효타구면을 제공하고 더욱 향상된 유연성과 반발력을 선사",
  "H.M. Graphite / NANOMETRIC DR",
  "Oval Pressed Shafr",
  "아이소메트릭",
  "에어로 쉐이프",
  "슈퍼 쿠션 그립",
  "듀얼 셧 시스템",
  "vdm"
);
const ezoneDr100Blue = new Product(
  "EZONE DR 100 (Blue color)",
  imgArr[55].src,
  imgArr[55].alt,
  "G: 300g / 10.6oz",
  `밸런스: 320mm <br> 너비: 23 mm - 26 mm - 22 mm`,
  "black / blue",
  "EZONE 시리즈의 새로운 세대, EZONE DR의 새로운 디자인. 2016년 10월 출시. 최상급 카본 그라파이트인 나노메트릭 DR을 사용한 세계 최초의 라켓으로 보다 확대된 유효타구면을 제공하고 더욱 향상된 유연성과 반발력을 선사",
  "H.M. Graphite / NANOMETRIC DR",
  "Oval Pressed Shafr",
  "아이소메트릭",
  "에어로 쉐이프",
  "슈퍼 쿠션 그립",
  "듀얼 셧 시스템",
  "vdm"
);
const ezoneDr98 = new Product(
  "EZONE DR 98",
  imgArr[56].src,
  imgArr[56].alt,
  `G: 310g / 10.9oz <br> LG: 285g / 10.1oz`,
  `밸런스: G 310mm / LG 330mm <br> 너비: 23 mm - 24 mm - 19 mm`,
  "Dark Gun / Lime",
  "2015년 9월 말 출시. EZONE 시리즈의 새로운 세대, EZONE DR. 최상급 카본 그라파이트인 나노메트릭 DR을 사용한 세계 최초의 라켓으로 보다 확대된 유효타구면을 제공하고 더욱 향상된 유연성과 반발력을 선사",
  "H.M. Graphite / NANOMETRIC DR",
  "Oval Pressed Shafr",
  "아이소메트릭",
  "에어로 쉐이프",
  "슈퍼 쿠션 그립",
  "듀얼 셧 시스템",
  "vdm"
);
const ezoneDr100 = new Product(
  "EZONE DR 100",
  imgArr[57].src,
  imgArr[57].alt,
  `G: 300g / 10.6oz <br> LG: 285g / 10.1oz`,
  `밸런스: G 320mm / LG 325mm <br> 너비: 23 mm - 26 mm - 22 mm`,
  "Dark Gun / Lime",
  "2015년 9월 말 출시. EZONE 시리즈의 새로운 세대, EZONE DR. 최상급 카본 그라파이트인 나노메트릭 DR을 사용한 세계 최초의 라켓으로 보다 확대된 유효타구면을 제공하고 더욱 향상된 유연성과 반발력을 선사",
  "H.M. Graphite / NANOMETRIC DR",
  "Oval Pressed Shafr",
  "아이소메트릭",
  "에어로 쉐이프",
  "슈퍼 쿠션 그립",
  "듀얼 셧 시스템",
  "vdm"
);
const ezoneDrLite = new Product(
  "EZONE DR Lite",
  imgArr[58].src,
  imgArr[58].alt,
  "270g / 9.5oz",
  `밸런스: 330mm <br> 너비: 23 mm - 26 mm - 22 mm`,
  "Dark Gun / Lime, Dark gun / Pink", 
  "2015년 9월 말 출시. EZONE 시리즈의 새로운 세대, EZONE DR. 최상급 카본 그라파이트인 나노메트릭 DR을 사용한 세계 최초의 라켓으로 보다 확대된 유효타구면을 제공하고 더욱 향상된 유연성과 반발력을 선사",
  "H.M. Graphite, NANOMETRIC DR",
  "Oval Pressed Shafr",
  "아이소메트릭",
  "에어로 쉐이프",
  "슈퍼 쿠션 그립",
  "듀얼 셧 시스템",
  "vdm"
);
const ezoneDrFeel = new Product(
  "EZONE DR Feel",
  imgArr[59].src,
  imgArr[59].alt,
  "255g / 9.0oz",
  `밸런스: 350mm <br> 너비: 24 mm - 26.5 mm - 23 mm`,
  "Dark Gun / Lime, Dark gun / Pink", 
  "2015년 9월 말 출시. EZONE 시리즈의 새로운 세대, EZONE DR. 최상급 카본 그라파이트인 나노메트릭 DR을 사용한 세계 최초의 라켓으로 보다 확대된 유효타구면을 제공하고 더욱 향상된 유연성과 반발력을 선사",
  "H.M. Graphite / NANOMETRIC DR",
  "Oval Pressed Shafr",
  "아이소메트릭",
  "에어로 쉐이프",
  "슈퍼 쿠션 그립",
  "듀얼 셧 시스템",
  "vdm"
);

const ts015 = new clothes(
  "223TS015M / 223TS016F",
  imgArr[60].src,
  imgArr[60].alt,
  `223TS015M (남) 95 ~ 120 <br> 223TS016F (여) 85 ~ 100`,
  "겉감 : 폴리에스터 95%, 폴리우레탄 5%",
  "blue",
  "크랙 패턴 베이스에 심플한 컬러 라인이 포인트인 게임웨어 자사 단독 기능성 소재인 AIR COOL+ 사용하여 시원한 착용감 데오드란트 TAPE을 적용하여 쾌적하게 착용 가능",
  "데오도란트",
  "Y-Cool",
  "air cool",
  "air free",
);

const ts001New = new clothes(
  "221TS001M / 221TS002F",
  imgArr[61].src,
  imgArr[61].alt,
  `221TS001M (남) 95 ~ 120<br>221TS002F (여) 85 ~ 100`,
  `겉감 : 폴리에스터 100%<br>배색 : 폴리에스터 90%, 폴리우레탄 10%`,
  "white",
  "심플한 라인이 포인트가 되는 게임웨어 자사 단독 기능성 소재 AIR COOL + AIR FREE를 사용하여 시원하고 편안한 착용감 데오드란트 TAPE을 적용하여 쾌적하게 착용 가능",
  "데오도란트",
  "Y-Cool",
  "air cool",
  "air free",
);
const ts011New = new clothes(
  "221TS011M / 221TS012F",
  imgArr[62].src,
  imgArr[62].alt,
  `221TS011M (남) 95 ~ 120<br>221TS012F (여) 85 ~ 100`,
  `겉감 : 폴리에스터 90%, 폴리우레탄 10%<br>배색 : 폴리에스터 100%`,
  "pink",
  "은은한 핑크 워터컬러톤의 패턴을 적용한 세련된 감성의 게임웨어 자사 단독 기능성 소재 AIR FREE를 사용하여 편안한 착용감 활동성에 최적화된 파워슬리브 기능성 패턴을 적용",
  "파워슬리브",
  "데오도란트",
  "air cool",
  "air free",
);
const ts001 = new clothes(
  "213TS001M / 213TS002F",
  imgArr[63].src,
  imgArr[63].alt,
  `213TS001M (남) 95 ~ 120<br>213TS002F (여) 85 ~ 100`,
  `겉감 : 폴리에스터 90%, 폴리우레탄 10%<br>배색 : 폴리에스터 100%`,
  "RED",
  "가슴과 등판에서 소매로 이어지는 라인 포인트의 게임웨어. 요넥스 신규 소재인 AIR COOL+, 데오드란트 TAPE 파워슬리브가 적용된 테크니컬 의류.",
  "파워슬리브",
  "데오도란트",
  "y-cool",
  "air free",
);
const ts013 = new clothes(
  "213TS013M / 213TS014F",
  imgArr[64].src,
  imgArr[64].alt,
  `213TS013M (남) 95~110<br>213TS014F (여) 85~100`,
  "폴리우레탄 100%",
  "WHITE",
  "컬러풀한 붓터치 느낌의 패턴이 포인트인 게임웨어. 흡습속건이 뛰어난 소재사용과 우수한 착용감과 실루엣에 초점이 맞춰진 패턴이 적용된 기능성 의류.",
  "파워슬리브",
  "데오도란트",
  "y-cool",
  "에어로실버"
);
const ts011 = new clothes(
  "223TS011M / 223TS012F",
  imgArr[65].src,
  imgArr[65].alt,
  `223TS011M (남) 95 ~ 120<br>223TS012F (여) 85 ~ 100`,
  `겉감 : 폴리에스터 95%, 폴리우레탄 5%<br>배색1 : 폴리에스터 90%, 폴리우레탄 10%<br>배색2 : 폴리에스터 92%, 폴리우레탄 8%<br>안감 : 폴리에스터 92%, 폴리우레탄 8%`,
  "white",
  "NEW 절개 패턴과 청량감있는 은은한 그래픽을 적용한 게임웨어 자사 단독 기능성 소재 AIR COOL+, AIR FREE+ 사용하여 시원하고 편안한 착용감. 데오드란트 TAPE를 적용하여 쾌적하게 착용 가능",
  "air cool",
  "데오도란트",
  "y-cool",
  "air free",
);
const ph001New = new clothes(
  "219PH001M",
  imgArr[66].src,
  imgArr[66].alt,
  "95~110",
  `겉감 : 나일론 77% / 폴리우레탄 23%`,
  "ORANGE, L/GREY",
  "NEW 컬러로 재출시하는 심플한 디자인의 스테디 셀러 3부 우븐 팬츠, 허리 스트링으로 사이즈 조절 가능",
  "소프트 스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);



const ph001 = new clothes(
  "221PH001M",
  imgArr[67].src,
  imgArr[67].alt,
  "95~110",
  `겉감 : 폴리우레탄 100%`,
  "PINK, SKY BLUE, WHITE, CHARCOAL GRAY, NAVY, BLACK",
  "다리 안쪽 3D 패턴을 적용하여 활동성이 편리한 게임웨어 4부 팬츠 소프트한 촉감의 소재로 착용감 우수 다트 디테일과 웰딩 브랜드 로고 포인트",
  "소프트 스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);

const wp018 = new clothes(
  "201WP018F / 201WP017M",
  imgArr[68].src,
  imgArr[68].alt,
  `201WP018F(여): 85~100<br>201WP017M(남): 95~110`,
  "겉감 : 나일론 77% / 폴리우레탄 23%",
  "black",
  "소프트한 촉감과 스트레치성이 우수한 소재의 웜업 단품 팬츠.",
  "스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);

const coupleKnit = new clothes(
  "COUPLE-KNIT 36210 / 36209",
  imgArr[69].src,
  imgArr[69].alt,
  `36210 : 85,90,95,100 <br> 36209 : 95,100,105,110`,
  "면 65%, 폴리에스터 35%",
  "gray[010]",
  "멜란지 그레이 바지로 폴리코튼 혼방소재를 사용하여 부드러운 촉감과 편안한 착용감을 주어 일상복으로도 활용 가능하며 후드 티셔츠나 어떤 상의에도 코디가 용이함",
  "스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);
const ps001New = new clothes(
  "223PS001F",
  imgArr[70].src,
  imgArr[70].alt,
  "85~100",
  `겉감 : 나일론 77%, 폴리우레탄 23% <br> 속바지 : 폴리에스터 85%, 폴리우레탄 15%`,
  "WHITE, BLACK",
  "베이직한 컬러에 앞면에만 적용한 심플한 플리츠가 포인트인 스커트 팬츠 적당한 기장의 이너팬츠가 적용되어 있어 활동 편리",
  "스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);
const ps001 = new clothes(
  "211PS001F",
  imgArr[71].src,
  imgArr[71].alt,
  "85~100",
  `겉감 : 나일론 77%, 폴리우레탄 23%<br>속감: 폴리에스터 85%, 폴리우레탄 15%`,
  "BLACK, NAVY, RED, WHITE, MID NIGHT",
  "NEW 컬러로 재출시하는 심플한 컬러포인트 디자인의 스테디 셀러 스커트 팬츠. 적당한 기장의 이너팬츠가 적용되어 있어 스타일링 및 착용 편리.",
  "스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);
const wu001 = new clothes(
  "223WU001M / 223WP001M  ",
  imgArr[72].src,
  imgArr[72].alt,
  `223WU001M / 223WP001M (남) 95~110 <br> (특수사이즈 115~120)`,
  `겉감 : 폴리에스터 77%, 폴리우레탄 23%<br>배색 : 폴리에스터 77%, 폴리우레탄 23%`,
  "MID NIGHT",
  "톤온톤컬러의 어깨 배색이 포인트가 되는 트레이닝 탑 밑단과 소매단의 접밴드 디테일로 세련된 감성 전달",
  "스트레치",
  "air free",
  "air cool",
  "데오도란트"
);
const wu009= new clothes(
  "223WU009U / 223WP009U",
  imgArr[73].src,
  imgArr[73].alt,
  "85~110",
  `상의 <br>겉감 : 나일론 86%, 폴리우레탄 14% <br>배색 : 폴리에스터 87%, 폴리우레탄 13% <br>안감 : 폴리에스터 100% <br>하의 <br>겉감 : 폴리에스터 87%, 폴리우레탄 13%`,
  "black",
  "FW 시즌 NEW 우븐 스판 소재를 적용한 아우터 겸용 트레이닝 탑. 세련된 트리플컬러 배색에 라임컬러로 원포인트를 적용하여 트렌디한 감성을 표현. 메쉬 안감 및 스판성이 함유되어 편안한 착용감.",
  "스트레치",
  "air free",
  "air cool",
  "데오도란트"
);
const wu002 = new clothes(
  "221WU002F / 221WP002F",
  imgArr[74].src,
  imgArr[74].alt,
  "221WU002F / 221WP002F (여) 85~100",
  `상의 <br>겉감: 폴리에스터 80%, 폴리우레탄 20% <br> 하의<br>겉감: 나일론 80%, 폴리우레탄 20% <br> 배색: 폴리에스터 80%, 폴리우레탄 20%`,
  `상의 : WHITE <br> 하의 : BLACK`,
  "S/S 시즌 감성의 뉴컬러 배색으로 화사한 느낌을 주는 트레이닝 탑 엠보 패턴을 적용하여 고급스러운 감성 표현",
  "스트레치",
  "air free",
  "air cool",
  "데오도란트"
);
const wu005New = new clothes(
  "221WU005M / 221WP005M",
  imgArr[75].src,
  imgArr[75].alt,
  `221WU005M / 221WP005M (남) 95~110<br>(특수사이즈 115~120)`,
  `상의<br>겉감: 나일론 80%, 폴레우레탄 20%<br>배색: 폴리에스터 80%, 폴레우레탄 20%<br>하의<br> 겉감: 나일론 80%, 폴레우레탄 20%`,
  "black",
  "S/S 시즌 감성의 뉴컬러 배색으로 트랜디한 감성을 전달하는 트레이닝 탑. 엠보 패턴을 적용하여 고급스러운 감성 표현",
  "스트레치",
  "air free",
  "air cool",
  "데오도란트"
);
const wu008= new clothes(
  "221WU008F / 221WP008F",
  imgArr[76].src,
  imgArr[76].alt,
  "221WU008F / 221WP008F (여) 85~100",
  `상의<br>겉감: 폴리에스터 77%, 폴리우레탄 23%<br>배색1: 나일론 77%, 폴리우레탄 23%<br>배색2: 폴리에스터 77%, 폴리우레탄 23%<br>하의<br>겉감: 나일론 77%, 폴리우레탄 23%`,
  "white",
  "세련된 트리플컬러 배색으로 액티브한 감성을 전달하는 트레이닝 탑. 소매안쪽과 옆면에 엠보 패턴을 적용하여 고급스러운 감성 표현",
  "소프트 스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);
const wu005 = new clothes(
  "213WU005M / 213WP005M",
  imgArr[77].src,
  imgArr[77].alt,
  "95~120",
  `상의: NYLON 80%, POLYURETHANE20%<br>하의: NYLON 80%, POLYURETHANE20%`,
  "black",
  "영한 감성의 과감한 컬러 배색이 포인트인 트레이닝웨어. 쾌적하고 산뜻한 착용감.",
  "소프트 스트레치",
  "에어로실버",
  "y-cool",
  "데오도란트"
);
const cc001u = new clothes(
  "79CC001U",
  imgArr[78].src,
  imgArr[78].alt,
  "free size",
  "PE 100%",
  "white / black",
  "소프트한 터치감이 돋보이는 베이직한 캡 모자. 로고에 포인트를 준 모자로 실외 활동에 필수 아이템으로 다양하게 스타일링 가능",
  "y-cool",
  "air cool",
  "air free",
  "데오도란트"
);
const bn001u = new clothes(
  "99BN001U",
  imgArr[79].src,
  imgArr[79].alt,
  "7cm * 12cm",
  "폴리에스터 90%, 폴리우레탄 10%",
  "BLUE, NAVY BLUE, SKY BLUE, RED, MAGENTA, YELLOW, WHITE, GREY, NAVY, CHARCOAL GREY, BLACK",
  "요넥스 밴드(롱)",
  "소프트 스트레치",
  "air cool",
  "air free",
  "데오도란트"
);
const tw002u = new clothes(
  "229TW002U",
  imgArr[80].src,
  imgArr[80].alt,
  "100cm * 19cm",
  "면 100%",
  "white / black",
  "블랙&화이트 베이스에 사선 스트라이프 패턴과 레드 포인트 컬러를 적용한 스포티한 감성의 응원수건",
  "데오도란트",
  "y-cool",
  "소프트 이너",
  "쿨 터치",
);
const ac1901 = new clothes(
  "AC1901",
  imgArr[81].src,
  imgArr[81].alt,
  "free size",
  "폴리에스터 90%, 폴리우레탄 10%",
  "White[011] / Pink[026] / SkyBlue[027]",
  "사용자의 편의에 맞게 자유롭게 늘어나는 재질로 제작하였으며 더욱 편안한 착용감을 제공합니다",
  "소프트 스트레치",
  "air cool",
  "air free",
  "쿨 이너",
);
const ac108wex = new clothes(
  "AC108WEX Wave Grap Pure",
  imgArr[82].src,
  imgArr[82].alt,
  "W 28mm X L 1,050mm X T 0.6~3.1mm",
  "폴리우레탄, 천연 고무",
  "White, Black, Yellow, Orange, Pink",
  "국내에 첫 출시되는 심그립으로 미끄러움은 감소시키고 안정감은 향상. 뛰어난 땀 흡수력 및 점착력 좋은 그립감 제공",
  "에어로실버",
  "y-cool",
  "소프트 이너",
  "쿨 터치",
);
const as50 = new clothes(
  "AS-50",
  imgArr[83].src,
  imgArr[83].alt,
  "12 PCS / DOZEN",
  "거위털",
  "white",
  "yonex의 대표 제품 거위털을 사용하여 더욱 빠른 스피드 및 더욱 높은 힘을 발휘할 수 있도록 도와줍니다 또한 콕의 안정성을 높여 쉽게 망가지지 않도록 제작되었습니다",
  "정확한 샷",
  "품질 보증",
  "파워 향상",
  "튼튼한 콕"
);
const bt006u = new clothes(
  "229BT006U",
  imgArr[84].src,
  imgArr[84].alt,
  "가로51cm * 세로27cm * 폭20cm",
  `겉감 : 폴리우레탄 100%<br>안감 : 폴리에스터 100%`,
  "white",
  "베이스컬러는 화이트 이지만, 각도에 따라 은은한 핑크빛이 나타나는 제품으로, 요넥스 토너먼트백에 적용된, 수납공간을 그대로 축소한 미니토너먼트백",
  "컴포트 백",
  "임팩트 벤더",
  "라운드 보더",
  "어고쉐이프"
);
const bt003u = new clothes(
  "209BT003U",
  imgArr[85].src,
  imgArr[85].alt,
  "가로72cm * 세로30cm * 폭22cm",
  "폴리에스터 100%",
  "WHITE",
  "신규소재와 실험적인 그래픽요소의 결합으로 새롭게 보여지는 요넥스의 신규 2단 토너먼트 백.",
  "컴포트 백",
  "임팩트 벤더",
  "라운드 보더",
  "어고쉐이프",
);
const bt005u = new clothes(
  "219BT005U",
  imgArr[86].src,
  imgArr[86].alt,
  "가로72cm * 세로30cm * 폭22cm",
  "폴리우레탄 100%",
  "IVORY",
  "전후면 대형 WAVE 그래픽으로 심플하지만 강렬함을 전달하는 2단 라켓백",
  "컴포트 백",
  "임팩트 벤더",
  "라운드 보더",
  "어고쉐이프"
);
const shb65z3mex = new clothes(
  "SHB-65Z3MEX (65 Z3 남성용)",
  imgArr[87].src,
  imgArr[87].alt,
  "250mm ~ 300mm",
  `갑피 : Synthetic Leather<br>중창 : Synthetic Resin<br>밑창 : Rubber Sole`,
  "white / red, black",
  "국가대표, 세계 톱 플레이어들의 원픽. 편안한 착화감과 안정적인 핏의 올라운드 배드민턴화의 대명사.",
  "파워 카본(65z)",
  "파워 그라이이트 시트",
  "레터럴 쉘",
  "더블 러셀 메시",
);
const shb57ex = new clothes(
  "SHB-57EX [남녀공용]",
  imgArr[88].src,
  imgArr[88].alt,
  "220mm ~ 290mm",
  `갑피 : Synthetic Fiber, Synthetic resin<br>중창 : Synthetic resin<br>밑창 : Rubber`,
  "White / Neon Orange",
  "코트 위 나를 빛내줄 디자인 그리고 합리적인 기능을 갖춘 제품",
  "파워 그라파이트 드라이브",
  "어고쉐이프",
  "듀러블 스킨 라이트",
  "이너 부티",
);
const shb32ex = new clothes(
  "SHB-31EX [남녀공용]",
  imgArr[89].src,
  imgArr[89].alt,
  "220mm ~ 290mm",
  `갑피 : Synthetic Fiber, Synthetic resin<br>중창 : Synthetic resin<br>밑창 : Rubber`,
  "mint",
  "민트 컬러를 포인트로 산뜻한 느낌을 주며 입문자들이 부담없이 신을 수 있는 모델",
  "어고쉐이프",
  "라운드 솔",
  "파워 그라파이트 세트",
  "더블 러셀 메시",
);

//jquery 모달창 fadein fadeout

$(document).ready(function () {
  $(".product_list li").click(function () {
    $(".modal_tab").fadeIn();
    y = window.screen.height;    
    modalContainer.style.top = (y / 2) - (modalContainer.clientHeight / 1.75) + "px";
  });
  $(".exit a").click(function (e) {
    e.preventDefault();
    $(".modal_tab").fadeOut();
  });
  $(".modal_background").click(function () {
    $(".modal_tab").fadeOut();
  });
  $(document).keydown(function (e) {
    if (e.key === "Escape") {
      $(".modal_tab").fadeOut();
    }
  });
});


//js 버젼 모달창 fadein fadeout

// //productList 클릭시 모달창 띄우기
// productList.forEach((i) => {
//   i.addEventListener("click", () => {
//     modal.classList.add("modal_show");
//   });
// });

// //모달창 닫기
// modalClose.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal.classList.remove("modal_show");
// });

// //모달창 외부 클릭시 닫기
// window.addEventListener("click", (e) => {
//   if (e.target === modalBackground) {
//     modal.classList.remove("modal_show");
//   }
// });

// //esc키 누르면 모달창 닫기
// window.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     modal.classList.remove("modal_show");
//   }
// });