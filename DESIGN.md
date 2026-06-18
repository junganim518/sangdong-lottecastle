# 상동역 롯데캐슬 분양홈페이지 — 디자인 기획서

## 1. 프로젝트 개요

- **사업지**: 상동역 롯데캐슬 (경기도 부천시 상동 540-1 일원, 구 홈플러스 부지)
- **유형**: 아파트(936세대) + 오피스텔(917호) 주상복합 분양홈페이지
- **참고 사이트**: https://www.xn--2n1buhw9jnxkiocz8gj8r.kr/ (워드프레스 기반, 디자인 리뉴얼 대상)
- **유지할 것**: 상담 신청 폼 필드 구성 (이름 / 연락처 / 생년월일 6자리 / 개인정보 수집동의)
- **바꿀 것**: 전체 비주얼 디자인 — 고급스럽고 모던한 톤으로 새로 제작

## 2. 디자인 토큰

### 색상
| 이름 | HEX | 용도 |
|---|---|---|
| Charcoal | `#0F1419` | 베이스 다크 (히어로, 다크 섹션 배경) |
| Charcoal Soft | `#1A2129` | 카드/섹션 배경 변형 |
| Gold | `#C9A368` | 시그니처 포인트 컬러, CTA, 강조 |
| Gold Soft | `#E3CDA0` | 골드 라이트 변형, 다크 배경 위 텍스트 강조 |
| Ivory | `#F5F3EF` | 오프화이트, 메인 배경/반전 텍스트 |
| Stone | `#8B8D93` | 보조 텍스트 (다크 배경 위) |
| Line | `#2A3138` | 다크 배경 위 헤어라인 |

### 타이포그래피
- **디스플레이(헤딩)**: Noto Serif KR (500/700/900) — 한글 명조 굵기로 신뢰감과 고급감 표현
- **본문**: Pretendard (CDN: jsdelivr) — 가독성 좋은 한국어 표준 산세리프
- **숫자/스펙(utility)**: JetBrains Mono — 세대수, 층수, 면적 등 스펙 정보에 사용해 "사양표" 느낌 부여

### 레이아웃 시그니처
**"층(層)을 쌓아 올리는" 모티프** — 49층이라는 스펙 자체를 비주얼 정체성으로 활용.
- 히어로 우측에 49개의 가는 가로 바를 세로로 쌓아 스카이라인을 표현 (`Hero.tsx` 참고)
- 골드 컬러의 가는 세로선(`floor-line` 클래스, globals.css)을 필요한 곳에 포인트로 사용 가능
- 애니메이션은 최소화: 과도한 모션 대신 호버/포커스 정도의 미묘한 인터랙션만 적용

## 3. 정보 구조 (IA) — 5개 섹션

1. **Header** — 고정 네비게이션 (사업개요/입지안내/평면타입/상담신청 앵커 링크)
2. **Hero** — 메인 배너, 핵심 카피 + 스펙(49F / 1,853세대 / 2026 착공) + CTA 2개
3. **Overview** (`#overview`) — 사업개요 카드 그리드 + 특장점 4가지
4. **Location** (`#location`) — 지도(현재 placeholder) + 교통/생활인프라 리스트
5. **UnitTypes** (`#unit-types`) — 아파트/오피스�텔 탭 전환 + 평면 카드
6. **ContactForm** (`#contact`) — 상담 신청 폼 (이름/연락처/생년월일/동의)

## 4. 콘텐츠 데이터 관리

모든 텍스트·스펙 데이터는 **`src/data/project.ts` 한 파일**에 모여 있습니다.
이 파일만 수정하면 사이트 전체가 갱신되도록 설계했습니다:
- `projectInfo` — 단지명, 위치, 시행사, 세대수 등 기본 정보
- `overviewItems` — 사업개요 카드 데이터
- `highlights` — 특장점 4가지 (현재 placeholder 카피, 실제 차별화 포인트로 교체 권장)
- `apartmentUnitTypes` / `officeUnitTypes` — 평면 타입별 면적/구성/세대수
- `locationInfo` — 교통/생활 인프라 텍스트, 지도 embed URL
- `galleryImages`, `contactInfo` — 이미지 자리, 연락처

## 5. 이미지 처리

현재 모든 이미지는 `ImagePlaceholder` 컴포넌트로 자리만 잡아둔 상태입니다 (`src/components/ui/ImagePlaceholder.tsx`).
실제 이미지가 준비되면:
1. `/public/images/` 폴더에 이미지 추가
2. `src/data/project.ts`의 `imageSrc: null` → 실제 경로로 교체
3. 해당 섹션 컴포넌트에서 `ImagePlaceholder` → Next.js `<Image>` 컴포넌트로 교체

## 6. 다음 단계 (Claude Code에서 진행 권장)

- [ ] 실제 단지 이미지(조감도, 단지배치도, 평면도) 적용
- [ ] 구글 시트 또는 Supabase 연동 — `ContactForm.tsx`의 `handleSubmit` 내부 TODO 부분
- [ ] 카카오/네이버 지도 embed 적용 — `Location.tsx`의 `mapEmbedSrc`
- [ ] 실제 평형/세대수 데이터로 `project.ts` 업데이트
- [ ] 메타데이터 / OG 이미지 / Naver 사이트 인증 태그 추가 (헤르만 플랫폼에서 작업한 SEO 패턴 참고 가능)
- [ ] 도메인 연결 (추후 결정)
- [ ] 모바일 반응형 디테일 점검 (현재 기본 반응형은 적용되어 있으나 실제 디바이스 테스트 필요)

## 7. 폰트 관련 참고사항

이 개발 컨테이너는 네트워크 정책상 `fonts.googleapis.com` 접근이 차단되어 있어 로컬에서 빌드 검증을 완전히 하지 못했습니다 (구글 폰트 임시 제거 후 빌드 성공 확인함). Claude Code 로컬 환경에서는 정상적으로 Noto Serif KR / JetBrains Mono를 받아올 수 있을 것이나, 혹시 빌드 에러가 나면 `next/font/google` 대신 self-hosting 방식으로 교체하는 것도 고려해보세요.
