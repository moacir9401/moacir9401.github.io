import React, { useState } from "react";
import produce from "immer";

import BoardContext from "./context";
import { loadLists } from "../../services/api";
import List from "../list";

import { Container } from "./styles";

const data = loadLists();

export default function Board() {
  const [lists, setListes] = useState(data);

  function move(fromList, toList, from, to) {
    setListes(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
