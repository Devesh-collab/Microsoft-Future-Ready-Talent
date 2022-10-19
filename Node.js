nodejstest:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: 'frontend' # Here the path to the folder where package-lock.json is located.
    strategy:
      matrix:
        node-version: [16.x] # Are you are missing this specification?
    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
        cache-dependency-path: '**/package-lock.json' # THIS PATTERN did the trick for me.