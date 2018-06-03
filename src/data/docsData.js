const pagination = {
  name: 'pagination',
  description: '배열의 페이징을 해준다.\n배열과 페이지당 사이즈, 페이지 번호를 받아 페이지에 해당하는 배열만큼을 리턴한다.',
  def: `function paginate (array, page_size, page_number) {
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}`,
  runFunctions: [
    'paginate([1, 2, 3, 4, 5, 6], 2, 1); // [3, 4]',
    'paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 0); // [1, 2, 3, 4]'
  ]
};

const truncateLongText = {
  name: 'truncateLongText',
  description: '텍스트와 최대 길이, 대체 텍스트를 받아 최대 길이를 넘는 문자에 대해서 대체 텍스트로 변환한다',
  def: `function truncateLongText(_text, _maxLength, _lastText) {
  var text = _text;
	var maxLength = _maxLength || 20;
	var lastText = _lastText || "...";

	if (text.length > maxLength) {
		text = text.substr(0, maxLength) + lastText;
	}
	return text;
};`,
  runFunctions: [
    'truncateLongText("가나다라마바사", 3); // 가나다...',
    'truncateLongText("가나다라마바사", 5, "###"); // 가나다라마###'
  ]
};

const docsData = [
  pagination,
  truncateLongText
];

export default docsData;