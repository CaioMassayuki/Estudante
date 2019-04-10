import React from 'react'

function findLastTextNode(node: Node) : Node | null {
  if (node.nodeType === Node.TEXT_NODE) return node;
  let children = node.childNodes;
  for (let i = children.length-1; i>=0; i--) {
    let textNode = findLastTextNode(children[i]);
    if (textNode !== null) return textNode;
  }
  return null;
}

function replaceCaret(el: HTMLElement) {
  // Place the caret at the end of the element
  const target = findLastTextNode(el);
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === el;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var range = document.createRange();
    var sel = window.getSelection();
    range.setStart(target, target.nodeValue.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    if (el instanceof HTMLElement) el.focus();
  }
}

const TextBlock = () => {
  const [textValue, setTextValue] = React.useState('A')

  return (
    // TextColor
    <div>
      {/* TextContainer */}
      <div>
        {/* TextEditable */}
        <div
          contentEditable
          suppressContentEditableWarning
          dangerouslySetInnerHTML={{ __html: textValue }}
          onBlur={e => {
            setTextValue(e.target.innerText)
            e.target.focus()
          }}
          onFocus={e => console.log('focused')}
        />
      </div>
    </div>
  )
}

export default TextBlock
