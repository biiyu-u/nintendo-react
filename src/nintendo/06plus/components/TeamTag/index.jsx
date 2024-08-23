import { useEffect, useState } from "react";
export default function TeamTag({ tag, mousePosition, teamIdx }) {
  const team = [
    [
      // 전략기획
      "기획, 디자인, 개발 빼고 다 함!",
      "무슨 일이 일어나고 있나요?",
    ],
    [
      // 서비스 기획
      "(부재중) 미팅 다녀옵니다",
      "tap: 호출 시 회의실로 이동함",
      "중요한 건 꺾여도 그냥 하는 마음",
      "너는 다 기획이 있구나?",
      "지금까지 이런 기획은 없었다. 이것은 앱인가, 웹인가?",
    ],
    [
      // 디자인
      "눈에 보이는게 다가 아님👀",
      "그냥 원래대로 해주세요",
      "command Z",
      "터벅터벅 나에일상",
      "디자이너로 사행시 해주세요",
    ],
    [
      // iOS
      "사과를 갈아 마신 사람들",
      "One more thing",
      "녹즙 대신 사과즙",
      "너 아이폰 써? 애플워치 써? 맥북 써? 아이패드 써?",
      "시리야 너 부른거 아니야",
      "여기 애플 페이 되나요?",
    ],
    [
      // Android
      "미니언즈 오브 갤럭시",
      "제 폰에선 되는데요",
      "아이폰처럼 더 이상은 Never",
    ],
    [
      // web
      "제 컴에선 되는데요",
      "강력 새로고침 아니 강력 웹팀",
      "괜찮겠어? 난 멈추는 법을 모르는 웹개발자인데",
      "안되면 되게 하는 걸 안되겠는 걸 되게하는 웹팀",
    ],
  ];

  const [teamText, setTeamText] = useState("");
  const [prevI, setPrevI] = useState(999);

  useEffect(() => {
    if (tag) {
      function getRandomIdx() {
        const i = Math.floor(team[teamIdx].length * Math.random());
        setPrevI(i);
        if (i != prevI) {
          return i;
        }
        return getRandomIdx();
      }
      const i = getRandomIdx();
      setTeamText(team[teamIdx][i]);
    }
  }, [tag, teamIdx]);

  return (
    <div
      className={`TeamTag ${tag ? "on" : ""}`}
      style={{
        transform: `translate(${mousePosition.left}px,${mousePosition.top}px) rotate(12.81deg) scale(1)`,
      }}
    >
      {teamText}
    </div>
  );
}
