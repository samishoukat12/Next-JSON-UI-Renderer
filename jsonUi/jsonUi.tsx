// ui.tsx
export interface UIElement {
  type: string;
  props: {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    type?: string;
    children?: UIElement[] | string;
    placeholder?: string;
    onChange?: any;
    value?: any;
  };
}

const uiJson: UIElement = {
  type: "div",
  props: {
    className: "container",
    style: {
      border: "1px solid #ddd",
      padding: "10px",
    },
    children: [
      {
        type: "h1",
        props: {
          style: {
            color: "blue",
          },
          children: "Hello, World!",
        },
      },
      {
        type: "p",
        props: {
          style: {},
          children: "hello i am developer",
        },
      },
      {
        type: "input",
        props: {
          style: {
            padding: "5px 20px",
            color: "black",
          },
          type: "text",
          placeholder: "email",
          value: "testInput",
          onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
            console.log(e.target.value),
        },
      },
      {
        type: "button",
        props: {
          onClick: () => alert("Button clicked!"),
          style: {
            backgroundColor: "green",
            color: "white",
          },
          children: "Click me",
        },
      },
    ],
  },
};

export default uiJson;
