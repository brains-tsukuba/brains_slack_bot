module.exports = class TeamJoinService {
  getWelcomeText () {
    const welcomeText = `Brainsへようこそ!!
課題を終えた人はお疲れ様です！これから一緒に頑張っていきましょう！
仮入部の人は、課題を進めていきましょう！

*加入者にお願いしている手続き* があります。
皆の活動と成長を円滑にするために設けています。
↓以下のリンクに手続きが記載されているので、それぞれやってくださるようお願いします。
https://github.com/brains-tsukuba/Info-and-Rules/blob/master/documents/procedure.md

上記リンクに、名簿記入について書いてありますが、
↓のリンク先のスプレッドシートに記入してください。
  ${process.env.MEMBERS_SHEET_URL}

それでは、共に『世界を進めるIT界のBrains』になることを目指し、
そのためのプログラミングスキルとヒューマンスキルの獲得に向けて、共に支え合っていきましょう！！
`;
    return welcomeText;
  }
};