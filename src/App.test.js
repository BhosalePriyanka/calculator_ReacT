import { getAllByPlaceholderText, getByText, render, screen} from "@testing-library/react";
import { Button } from "bootstrap";
import App from './App';

test("type button render on screen", () => {
    render (<App />)
    const element = screen.getAllByRole("button")
   console.log(element)
    expect(element).toHaveLength(18)
});

test("check placeholder renderd on screen" , () => {
    const component = render(<App />);
    const childElement = component.findByPlaceholderText("0")
    expect(childElement).toBeInTheDocument
});

test("check button with name clear" , ()=>{
    const component = render(<App/>);
    const childElement = component.getByText("Clear")
    expect(childElement).toBeInTheDocument
})
test("chcck title renderd as calculator" , ()=>{
    const  component = render(<App/>);
    const title = component.getByText("Calculator")
    expect(title).toBeInTheDocument
})