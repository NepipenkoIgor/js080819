let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
    return str
        .split(';')
        .map((rule) => rule.trim())
        .filter(Boolean)
        .reduce((obj, rule) => {
            const [key, value] = rule.split(':');
            const keyWithoutSymbols = key.trim()
            return {...obj, [keyWithoutSymbols]: value.trim()};
        }, {});
}

console.log(styleToObject(style));
