import React from "react";
import { shallow } from "enzyme";
import ManufcTable from "./ManufcTable";

describe("ManufcTable", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ManufcTable />);
    expect(wrapper).toMatchSnapshot();
  });
});
