no-iits
=======

Detects iit/it.only/describe.only in your test files.  Accepts a glob pattern (or list of glob patterns) on the command line, but will default to test/*.js (the same default as mocha).


## Example usage: 

package.json
```javascript
{
  "scripts": {
    "test": "noiit && mocha"
  }
}
```


