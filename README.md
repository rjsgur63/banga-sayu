# 반가워, 사유 (웹 배포본)

HCI 설계 D조 웹 게임의 GitHub Pages 배포 폴더입니다.

- `index.html`: 첫 화면입니다. 두 판 중 하나를 고릅니다.
- `오리지널/index.html`: 사유자의 시련(약 30분)
- `시각장애인판/index.html`: 소리로 만나는 판(약 11분, 화면 낭독기 지원)
- `sw.js`: 예전 판이 이 주소에 남긴 서비스 워커(오프라인 캐시)를 지우는 파일. 지우지 마세요.

두 판 모두 그림, 소리, 영상까지 한 파일에 들어 있어서, 그 `index.html` 하나만 열어도 바로 시작합니다.
오리지널 시작 화면의 "소리로 만나는 판으로 가기" 링크는 옆 폴더 `../시각장애인판/index.html`로 갑니다.

## 새 판으로 바꾸는 법

1. 게임 폴더에서 `python3 build.py`를 실행합니다(`dist/`, `dist-blind/`가 새로 생김).
2. `dist/index.html`은 `오리지널/index.html`로, `dist-blind/index.html`은 `시각장애인판/index.html`로 덮어씁니다.
3. 커밋하고 `git push` 합니다. 1~2분 뒤 사이트에 반영됩니다.

파일 하나가 25MB를 넘어서 GitHub 웹 화면의 끌어다 놓기로는 올라가지 않습니다. `git push`나 GitHub Desktop을 쓰세요(한 파일 한도 100MB).
