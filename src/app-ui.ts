import $ from 'jquery';

export function button(label: string, clickFun: () => void) {
  return $('<button>').text(label).on('click', clickFun);
}
