import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Navigation } from "../src/common/navigation";

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it ("Aya Navigation", () => {
    act(() => {
        render(<Navigation />, container);
    })
    console.log("Aya content");
    console.log(container.textContent);
    
    expect(true).toBe(true);
});

