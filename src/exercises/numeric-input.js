/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input
* */

const NumericInput = {
  init: () => {
    document.querySelectorAll('.c-numeric-input').forEach(elem => {
      console.log('TODO: Please see the above requirement for numeric input');
      elem.addEventListener('blur', (event) => {      
      const value = event.target.value;
      const parsedVal= parseFloat(value);
      if(!parsedVal && value != "")
      {
        elem.classList.add('c-numeric-input-error')
        elem.classList.remove('c-numeric-input-valid','c-numeric-input');
      }
      else if(parsedVal){
        elem.classList.add('c-numeric-input-valid')
        elem.classList.remove('c-numeric-input-error','c-numeric-input');
        event.target.value = parsedVal.toString();
      }
      else{
        elem.classList.remove('c-numeric-input-valid', 'c-numeric-input-error');
        elem.classList.add('c-numeric-input');
        event.target.value ="";
      }
    });
  })
}
}

document.addEventListener('DOMContentLoaded', NumericInput.init);
