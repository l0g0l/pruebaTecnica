import React from "react";
import { shallow } from "enzyme";
import Search from "./Form";

describe("Search", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
