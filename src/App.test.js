import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('increments, decrements a number. also sets number back to 0', () => {
//   render(<App />);
  
// });

test('increments, decrements a number. also sets number back to 0', () => {
 const {getByTestId} = render(<App num={0}/>)
 const countValue = getByTestId("count").textContent
 expect(countValue).toEqual('0')
})

test('count should increment by 1 if add one button is clicked', () => {
 const {getByRole, getByTestId} = render(<App num={0}/>)
 const addButton = getByRole("button", {name:'add one'})
 const countValue = Number(getByTestId("count").textContent) 
 expect(countValue).toEqual(0)
 fireEvent.click(addButton)
 const countValue2 = Number(getByTestId("count").textContent) 
 expect(countValue2).toEqual(1
  )

})

test('should reset count to 0', () => {
 const {getByRole, getByTestId} = render(<App num={1}/>)
 const resetToZero = getByRole("button", {name:'set to 0'})
 const countValue = Number(getByTestId("count").textContent) 
 expect(countValue).toEqual(1)
 fireEvent.click(resetToZero)
 const countValue2 = Number(getByTestId("count").textContent) 
 expect(countValue2).toEqual(0)

})
