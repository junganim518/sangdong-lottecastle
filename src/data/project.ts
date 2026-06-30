/**
 * 단지 콘텐츠 데이터
 * ------------------------------------------------------------
 * 이 파일 하나만 수정하면 사이트 전체 텍스트/스펙이 갱신됩니다.
 * 이미지는 모두 placeholder 처리되어 있으니, /public/images 폴더에
 * 실제 이미지를 넣고 이 파일의 경로만 교체해주세요.
 * ------------------------------------------------------------
 */

export const projectInfo = {
  name: "상동역 롯데캐슬 시그니처",
  shortName: "상동역 롯데캐슬 시그니처",
  tagline: "7호선 초역세권, 부천의 새로운 랜드마크",
  subTagline: "아파트 1,859세대로 구성된 대단지 시그니처",
  location: "경기도 부천시 원미구 상동 540-1번지 (구 홈플러스 부지)",
  developer: "주식회사 미래도시",
  constructor: "롯데건설",
  scale: "지하 8층 ~ 지상 49층, 7개동",
  totalUnits: "총 1,859세대",
  businessType: "개발사업",
  saleDate: "2026년 07월 예정",
  saleDateShort: "2026.07",   // 히어로 섹션 스펙 표시용
  scaleShort: "B8~49F",       // 히어로 섹션 스펙 표시용
  moveInDate: "추후 공개",
  parking: "3,455대 (법정 2,732대)",
  totalFloorArea: "약 46만 5,992㎡",
  subwayLine: "7호선 상동역",
};

// 사업 개요 표에 들어갈 항목 (카드형으로 렌더링)
export const overviewItems = [
  { label: "위치", value: projectInfo.location },
  { label: "규모", value: `${projectInfo.scale}, ${projectInfo.totalUnits}` },
  { label: "사업형태", value: projectInfo.businessType },
  { label: "시행사", value: projectInfo.developer },
  { label: "시공사", value: projectInfo.constructor },
  { label: "분양시기", value: projectInfo.saleDate },
  { label: "입주시기", value: projectInfo.moveInDate },
  { label: "주차대수", value: projectInfo.parking },
];

// 단지 특장점 (실제 차별화 포인트로 교체 권장)
export const highlights = [
  {
    number: "01",
    title: "7호선 상동역 초역세권",
    description: "역 출구와 단지가 바로 연결되는 입지로 출퇴근 동선이 짧습니다.",
  },
  {
    number: "02",
    title: "아파트 단일 구성 대단지",
    description: "1,859세대 규모의 아파트 전용 단지로 쾌적한 주거 환경을 제공합니다.",
  },
  {
    number: "03",
    title: "최고 49층 스카이라인",
    description: "부천 권역에서 손꼽히는 높이로 조망권을 확보했습니다.",
  },
  {
    number: "04",
    title: "대단지 커뮤니티",
    description: "총 1,859세대 규모로 다양한 커뮤니티 시설이 계획되어 있습니다.",
  },
];

// 평면/타입 안내
export const TBD = "추후 공개" as const;

export type UnitType = {
  id: string;
  typeName: string;
  exclusiveArea: string; // 전용면적
  supplyArea: string;    // 공급면적
  rooms: string;         // 방/욕실 구성
  units: string;         // 세대수
  isPenthouse?: boolean;
  imageSrc: string | null;
};

export const apartmentUnitTypes: UnitType[] = [
  { id: "apt-84a",  typeName: "84A",  exclusiveArea: "약 84㎡", supplyArea: TBD, rooms: TBD, units: "224세대", imageSrc: null },
  { id: "apt-84b",  typeName: "84B",  exclusiveArea: "약 84㎡", supplyArea: TBD, rooms: TBD, units: "84세대",  imageSrc: null },
  { id: "apt-84c",  typeName: "84C",  exclusiveArea: "약 84㎡", supplyArea: TBD, rooms: TBD, units: "353세대", imageSrc: null },
  { id: "apt-84d",  typeName: "84D",  exclusiveArea: "약 84㎡", supplyArea: TBD, rooms: TBD, units: "89세대",  imageSrc: null },
  { id: "apt-84e",  typeName: "84E",  exclusiveArea: "약 84㎡", supplyArea: TBD, rooms: TBD, units: "178세대", imageSrc: null },
  { id: "apt-84f",  typeName: "84F",  exclusiveArea: "약 84㎡", supplyArea: TBD, rooms: TBD, units: "442세대", imageSrc: null },
  { id: "apt-113a", typeName: "113A", exclusiveArea: "약 113㎡", supplyArea: TBD, rooms: TBD, units: "224세대", imageSrc: null },
  { id: "apt-113b", typeName: "113B", exclusiveArea: "약 113㎡", supplyArea: TBD, rooms: TBD, units: "84세대",  imageSrc: null },
  { id: "apt-121",  typeName: "121",  exclusiveArea: "약 121㎡", supplyArea: TBD, rooms: TBD, units: "178세대", imageSrc: null },
  { id: "apt-192p", typeName: "192P", exclusiveArea: "약 192㎡", supplyArea: TBD, rooms: TBD, units: "1세대",  isPenthouse: true, imageSrc: null },
  { id: "apt-153p", typeName: "153P", exclusiveArea: "약 153㎡", supplyArea: TBD, rooms: TBD, units: "1세대",  isPenthouse: true, imageSrc: null },
  { id: "apt-187p", typeName: "187P", exclusiveArea: "약 187㎡", supplyArea: TBD, rooms: TBD, units: "1세대",  isPenthouse: true, imageSrc: null },
];

// 위치/입지 — 지도 좌표는 추후 실제 위/경도로 교체
export const locationInfo = {
  address: projectInfo.location,
  mapEmbedSrc: null as string | null, // 카카오/네이버 지도 embed URL — 추후 교체
  transitPoints: [
    { label: "7호선", desc: "상동역 도보 1분 (초역세권)" },
    { label: "버스", desc: "단지 인근 버스정류장 다수" },
    { label: "차량", desc: "경인고속도로 / 외곽순환도로 접근 용이" },
  ],
  amenityPoints: [
    { label: "쇼핑", desc: "현대백화점 중동점, 이마트 중동점, 뉴코아아울렛 인근" },
    { label: "교육", desc: "단지 인근 초/중/고 학군" },
    { label: "공원", desc: "상동호수공원 생활권" },
  ],
};

// 갤러리/조감도 이미지 — 전부 placeholder, 추후 실제 이미지로 교체
export const galleryImages: { id: string; alt: string; src: string | null }[] = [
  { id: "exterior-1", alt: "단지 조감도", src: null },
  { id: "site-plan", alt: "단지배치도", src: null },
  { id: "lottecastle", alt: "투시도", src: null },
];

export const contactInfo = {
  phone: "1544-0000",           // 추후 실제 상담 전화번호로 교체
  modelHouseAddress: "모델하우스 주소 추후 안내", // 추후 교체
  modelHouseOpenDate: "추후 안내",  // 모델하우스 오픈 일정
  modelHouseHours: "추후 안내",     // 운영 시간
  modelHouseParkingInfo: "추후 안내", // 주차 안내
};
