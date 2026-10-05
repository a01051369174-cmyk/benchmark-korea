# yohan.is-a.dev 배포 및 등록

이 프로젝트는 비상업적인 PC 부품 데이터베이스 목업입니다. 화면의 가격과 벤치마크 수치는 모두 `DEMO DATA`이며 실제 시세나 검증된 성능 측정값이 아닙니다.

## 준비된 설정

- `.github/workflows/pages.yml`: `main` 브랜치에 변경이 올라오면 GitHub Pages로 정적 사이트를 배포합니다.
- `registration/yohan.json`: is-a.dev 등록 저장소에 복사할 도메인 레코드 초안입니다.
- `index.html`, `styles.css`, `app.js`: 공개 웹사이트에 포함되는 파일입니다.

GitHub Pages의 CNAME 대상은 연결된 계정의 `a01051369174-cmyk.github.io`입니다. 실제 등록 파일은 is-a.dev 저장소의 `domains/yohan.json` 경로에 제출합니다.

## 공개 배포 순서

1. GitHub에 `benchmark-korea`라는 **공개 저장소**를 만듭니다.
2. 이 프로젝트 파일을 저장소에 올리고 기본 브랜치 이름을 `main`으로 설정합니다.
3. 저장소의 **Settings → Pages**에서 배포 소스를 **GitHub Actions**로 선택합니다.
4. **Actions** 탭의 Pages 배포가 성공하면 `https://a01051369174-cmyk.github.io/benchmark-korea/`에서 사이트를 확인하고 화면 캡처를 저장합니다.

## is-a.dev 등록 순서

1. `is-a-dev/register` 저장소를 계정으로 포크합니다.
2. 이 저장소의 `registration/yohan.json` 내용을 포크 저장소의 `domains/yohan.json`에 추가합니다.
3. 사이트 미리보기 링크와 화면 캡처를 포함해 `is-a-dev/register`의 `main` 브랜치로 PR을 엽니다.
4. 등록 PR이 승인된 뒤 사이트 저장소 **Settings → Pages → Custom domain**에 `yohan.is-a.dev`를 입력하고 HTTPS를 활성화합니다.

## 공개 전 유의 사항

- 이 사이트는 비상업적 소프트웨어 프로젝트 목업으로 운영합니다. 광고, 제휴 링크, 판매 기능은 넣지 않습니다.
- `yohan.is-a.dev`는 현재 공식 검사기에서 사용 가능으로 표시됐지만, 등록은 PR 검토 후 확정됩니다.
- `registration/yohan.json`은 연결된 GitHub 사용자명과 GitHub Pages DNS 대상을 반영한 초안입니다. 계정 또는 호스팅을 바꾸면 JSON도 수정해야 합니다.
- GitHub Pages 공개 설정과 도메인 연결은 GitHub 계정 로그인 후 진행해야 합니다.

