import HeroSection from "@/components/HeroSection";
import FestivalGrid from "@/components/FestivalGrid";
import Heading from "@/components/ui/Heading";

// 기능 데이터 배열
const festivalsMockData = [
  {
    id: 1,
    addr1: "서울특별시 송파구 양재대로 932 (가락동)",
    addr2: "가락몰 3층 하늘공원",
    areaCode: 1,
    contentId: "3113671",
    endDate: "2025-05-11",
    festivalType: "TOUR_API",
    homePage: "https://event-us.kr/garakmall/event/102703",
    overView:
      "전국 각지의 농수축산물이 모이는 가락몰에서, 전국 각지의 빵 맛집들이 모여 서울 최초의 전국 빵 축제를 개최한다. 축제는 5월 9일(금)부터 5월 11일(일)까지 3일간, 가락몰 하늘공원에서 진행된다. 20개의 전국 유명 빵집이 참여하며, 총 100종 이상의 다양한 빵을 선보인다. 축제 기간 동안 버블&매직쇼, 풍선 빵 오마카세와 같은 다양한 볼거리와 가락몰 및 행사장 구매고객대상 꽝없는 빵쿠폰 뽑기와 신라호텔 망고쇼트케이크, 나폴레옹과자점 쿠키세트 추첨 이벤트도 진행된다.선착순 400명의 사전 예약자에게는 1만원 빵쿠폰도 제공된다. 사진맛집 가락몰 하늘공원에서, 향긋한 빵 향기와 함께 가족, 친구, 연인과 멋진 추억을 남길 수 있다.",
    posterInfo:
      "http://tong.visitkorea.or.kr/cms/resource/73/3487473_image2_1.jpg",
    startDate: "2025-05-09",
    title: "가락몰 빵축제 전국빵지자랑",
  },
  {
    id: 2,
    addr1: "서울특별시 송파구 양재대로 932 (가락동)",
    addr2: "(가락동 600) 가락몰3층 하늘공원",
    areaCode: 1,
    contentId: "3379778",
    endDate: "2025-10-26",
    festivalType: "TOUR_API",
    homePage:
      "https://www.garak.co.kr/homepage/M0000075/board/view.do?atcSn=17462&pageIndex=1",
    overView:
      "전국 각지 농수산물이 모이는 서울시 송파구 가락몰 3층 하늘공원에서 루프탑 야외축제 '제2회 가락옥토버페스트 미식야행'을 개최한다. 낭만있는 캠핑, 수제맥주와 바베큐 그리고 가락시장에서 맛볼 수 있는 다양한 원물 요리까지 맛볼수 있는 행사이다. 10/24(금)~10/26(일), 3일간 약 20여 개의 전국 수제맥주브루어리와 다양한 먹거리 팝업 그리고 흑백요리사 출신 요리사들의 미식대결까지 새로운 맛의 향연이 펼쳐질 예정이다.",
    posterInfo:
      "http://tong.visitkorea.or.kr/cms/resource/69/3553069_image2_1.jpg",
    startDate: "2025-10-24",
    title: "가락옥토버페스트 미식야행",
  },
  {
    id: 3,
    addr1: "경상남도 김해시 분성로261번길 35 (봉황동)",
    addr2: "김해민속박물관",
    areaCode: 36,
    contentId: "694576",
    endDate: "2025-04-13",
    festivalType: "TOUR_API",
    homePage: "https://www.gcfkorea.com/",
    overView:
      "가야문화축제는 6가야의 맹주였던 금관가야를 바탕으로 한 역사와 전통을 자랑하는 김해시의 역사문화 축제로서 국내·외적으로 수준높은 축제로 자리매김하고 있다. 김수로왕은 서기 42년 탄강하여 가야를 건국하였고 48년 인도 아유타국 공주 허황옥과 결혼하였는데 이는 한반도 역사 최초의 국제 혼인이었다. 가야는 일찍부터 토기와 철기 문화의 발달로 중국, 낙랑, 일본 등 이웃 나라들과 교역하며 동북아시아 국제 교류의 중심지로서 찬란한 문화를 꽃피웠다. 유구한 역사와 독창적인 철기문화를 간직하고 있는 김해는 가야문화축제를 통하여 가야 문화를 세계적인 문화유산으로 보존하고 계승 발전시키고 있으며 고구려, 백제, 신라와 함께 제4의 제국 가야가 존재하였음을 증명하고 있다. 올해로 63주년 맞이한 가야문화축제는 ‘이천년 고도 가야, 글로컬 도시 김해’ 라는 슬로건으로 가야역사문화를 직접 느낄수 있는 다양한 프로그램을 마련하여 관람객 여러분을 맞이할 준비가 되어있고, 특히 “2025 가야문화축제”는 가야문화를 창의적으로 재현하는 프로그램과 관람객이 직접 참여할 수 있는 체험프로그램 개발에 초점을 맞추어 기획 되어 찬란했던 가야문화를 느낄수 있는 뜻 깊은 장이 될 것이다.",
    posterInfo:
      "http://tong.visitkorea.or.kr/cms/resource/23/3482523_image2_1.jpg",
    startDate: "2025-04-10",
    title: "가야문화축제",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/*
        min-h-screen: 최소 높이를 화면 전체로 설정
        bg-gray-50: 배경 연한 회색
      */}
      <HeroSection />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/*
          max-w-4xl: 최대 너비 896px
          mx-auto: 가로 중앙 정렬
          px-4 sm:px-6 lg:px-8: 반응형 좌우 여백
          py-12: 상하 여백 3rem
        */}
        <Heading level={3} size="xl" align="left" className="text-gray-900">
          이번 주 인기 축제
        </Heading>
        <FestivalGrid festivals={festivalsMockData} />
      </div>
    </div>
  );
}
