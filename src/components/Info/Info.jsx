import React from "react";
import "./info.scss";
import Button from "./../Button/Button";
import { Link } from "react-router-dom";
const info = {
  firstName: "La (ら)",
  lastName: "Phuoc Loc (ふぉっくろっく)",
  birthday: "22歳",
  sex: "男",
  nation: "ベトナム",
  address: "埼玉県草加市",
  phone: "07089592xxx",
  email: "cxxx150@ccg.ac.jp",
  facebook: "facebook.com/loc.la.9693",
  git: "https://github.com/LaPhuocLoc",
  language: "ベトナム語、日本語",
};
const card = [
  {
    title: "7",
    text: "個人",
    span: "プロジェクト",
  },
  {
    title: "1",
    text: "プログラミング",
    span: "経験年数",
  },
  {
    title: "1",
    text: "幸せな",
    span: "顧客",
  },
  {
    title: "1",
    text: "アワード",
    span: "受賞",
  },
];
const Info = () => {
  return (
    <div className="info">
      <div className="info__basic" data-aos="fade-up-right">
        <h3>基本情報</h3>
        <ul className="info-list">
          <li>
            <span>姓: </span>
            {info.firstName}
          </li>
          <li>
            <span>名: </span>
            {info.lastName}
          </li>
          <li>
            <span>生年月日: </span>
            {info.birthday}
          </li>
          <li>
            <span>性別: </span>
            {info.sex}
          </li>
          <li>
            <span>国籍: </span>
            {info.nation}
          </li>
          <li>
            <span>現住所: </span>
            {info.address}
          </li>
          <li>
            <span>電話番号: </span>
            {info.phone}
          </li>
          <li>
            <span>Facebook: </span>
            {info.facebook}
          </li>
          <li>
            <span>言語: </span>
            {info.language}
          </li>
          <li>
            <span>メール: </span>
            {info.email}
          </li>
        </ul>
        <Button>
          <a
            href="https://drive.google.com/file/d/14BNcLxvB7DAkVSYYgVbuBf9fup7E4eNB"
            rel="noopener"
            download
          >
            <span className="btn-text">履歴書ダウンロード</span>
            <span className="btn-icon">
              <i className="bx bxs-download"></i>
            </span>
          </a>
        </Button>
      </div>
      <div className="info__more" data-aos="fade-up-left">
        {card.map((item, i) => (
          <div className="info__more__card" key={i}>
            <h3>
              {item.title}
              <i className="bx bx-plus bx-rotate-90"></i>
            </h3>
            <p>
              {item.text} <span>{item.span}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Info;
