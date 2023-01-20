/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./styles";

import { useEffect, useState } from "react";

import M from "materialize-css";

import HeaderNav from "../../components/HeaderNav";
import AccordionRooms from "../../components/AccordionRooms";

export default function Dashboard() {
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    setTabs(M.Tabs.init(document.querySelector(".tabs")));
  }, []);

  return (
    <S.Container>
      <HeaderNav />

      <div id="rooms" className="col s12">
        <AccordionRooms />
      </div>
    </S.Container>
  );
}
