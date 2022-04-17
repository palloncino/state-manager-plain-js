const ConnectedComponent = (className, props) => {
  const div = document.createElement("div");
  div.setAttribute('class', className);
  div.textContent = props?.text || undefined;
  div.style = props?.style || undefined;
  document.body.appendChild(div);

  return function(updatedProps) {
    if (updatedProps?.select == className) {
      div.style.color = "red";
      div.style.background = "yellow";
    } else {
      div.style = props?.style || undefined;
    }
    div.textContent = `${div.textContent.split(" --> ")[0]} --> ${JSON.stringify(updatedProps)}`;
  }
}

const Component = (className, props) => {
  const div = document.createElement("div");
  div.setAttribute('class', className);
  div.textContent = props?.text || undefined;
  div.style = props?.style || undefined;
  document.body.appendChild(div);
  
  return;
}

export { ConnectedComponent, Component };
