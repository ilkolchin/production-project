/* eslint-disable i18next/no-literal-string */
import { counterActions } from '../model/slice/counterSilce';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <h1 data-testid="value-title">value = {counterValue}</h1>
      <Button
        onClick={increment}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="increment-btn"
      >
        increment
      </Button>
      <Button
        onClick={decrement}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="decrement-btn"
      >
        decrement
      </Button>
    </>
  );
};
