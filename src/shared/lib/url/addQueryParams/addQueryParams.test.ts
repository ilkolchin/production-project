import { getQueryParams } from './addQueryParams';

describe('addQueryParams', () => {
  test('test with one param ', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
  test('test with multiple params ', () => {
    const params = getQueryParams({
      test: 'value',
      foo: 'bar',
    });
    expect(params).toBe('?test=value&foo=bar');
  });
  test('test with undefinded ', () => {
    const params = getQueryParams({
      undefined,
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });
});
