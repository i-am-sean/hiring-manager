import { isString } from 'angular2/src/facade/lang';
import { RequestMethod } from './enums';
import { makeTypeError } from 'angular2/src/facade/exceptions';
export function normalizeMethodName(method) {
    if (isString(method)) {
        var originalMethod = method;
        method = method.replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase());
        method = RequestMethod[method];
        if (typeof method !== 'number')
            throw makeTypeError(`Invalid request method. The method "${originalMethod}" is not supported.`);
    }
    return method;
}
export const isSuccess = (status) => (status >= 200 && status < 300);
export function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return;
}
export { isJsObject } from 'angular2/src/facade/lang';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cF91dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9odHRwL2h0dHBfdXRpbHMudHMiXSwibmFtZXMiOlsibm9ybWFsaXplTWV0aG9kTmFtZSIsImdldFJlc3BvbnNlVVJMIl0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLDBCQUEwQjtPQUMxQyxFQUFDLGFBQWEsRUFBQyxNQUFNLFNBQVM7T0FDOUIsRUFBQyxhQUFhLEVBQUMsTUFBTSxnQ0FBZ0M7QUFHNUQsb0NBQW9DLE1BQU07SUFDeENBLEVBQUVBLENBQUNBLENBQUNBLFFBQVFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3JCQSxJQUFJQSxjQUFjQSxHQUFHQSxNQUFNQSxDQUFDQTtRQUM1QkEsTUFBTUEsR0FBR0EsTUFBTUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsWUFBWUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsRUFBRUEsS0FBS0EsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsR0FBR0EsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDM0ZBLE1BQU1BLEdBQUdBLGFBQWFBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO1FBQy9CQSxFQUFFQSxDQUFDQSxDQUFDQSxPQUFPQSxNQUFNQSxLQUFLQSxRQUFRQSxDQUFDQTtZQUM3QkEsTUFBTUEsYUFBYUEsQ0FDZkEsdUNBQXVDQSxjQUFjQSxxQkFBcUJBLENBQUNBLENBQUNBO0lBQ3BGQSxDQUFDQTtJQUNEQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTtBQUNoQkEsQ0FBQ0E7QUFFRCxhQUFhLFNBQVMsR0FBRyxDQUFDLE1BQWMsS0FBYyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBRXRGLCtCQUErQixHQUFRO0lBQ3JDQyxFQUFFQSxDQUFDQSxDQUFDQSxhQUFhQSxJQUFJQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6QkEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsV0FBV0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0RBLEVBQUVBLENBQUNBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EscUJBQXFCQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUN6REEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxlQUFlQSxDQUFDQSxDQUFDQTtJQUNoREEsQ0FBQ0E7SUFDREEsTUFBTUEsQ0FBQ0E7QUFDVEEsQ0FBQ0E7QUFFRCxTQUFRLFVBQVUsUUFBTywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNTdHJpbmd9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1JlcXVlc3RNZXRob2R9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHttYWtlVHlwZUVycm9yfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuaW1wb3J0IHtSZXNwb25zZX0gZnJvbSAnLi9zdGF0aWNfcmVzcG9uc2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kTmFtZShtZXRob2QpOiBSZXF1ZXN0TWV0aG9kIHtcbiAgaWYgKGlzU3RyaW5nKG1ldGhvZCkpIHtcbiAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBtZXRob2Q7XG4gICAgbWV0aG9kID0gbWV0aG9kLnJlcGxhY2UoLyhcXHcpKFxcdyopL2csIChnMCwgZzEsIGcyKSA9PiBnMS50b1VwcGVyQ2FzZSgpICsgZzIudG9Mb3dlckNhc2UoKSk7XG4gICAgbWV0aG9kID0gUmVxdWVzdE1ldGhvZFttZXRob2RdO1xuICAgIGlmICh0eXBlb2YgbWV0aG9kICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG1ha2VUeXBlRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgcmVxdWVzdCBtZXRob2QuIFRoZSBtZXRob2QgXCIke29yaWdpbmFsTWV0aG9kfVwiIGlzIG5vdCBzdXBwb3J0ZWQuYCk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZDtcbn1cblxuZXhwb3J0IGNvbnN0IGlzU3VjY2VzcyA9IChzdGF0dXM6IG51bWJlcik6IGJvb2xlYW4gPT4gKHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc3BvbnNlVVJMKHhocjogYW55KTogc3RyaW5nIHtcbiAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG4gICAgcmV0dXJuIHhoci5yZXNwb25zZVVSTDtcbiAgfVxuICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCB7aXNKc09iamVjdH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbiJdfQ==