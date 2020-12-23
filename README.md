# max-width-check
## Implementation
### HTML implementation
`data-mwc-hook="container"` attribute needs to be added to an HTML element that we want the text restriction to apply to. It is also recommended to add the `data-custom-overflow-message="Min font size exceeded"` to change the overflow default message cause this functionality will be mostly used in combination with textFit and will be fired once the minumum font size is exceeded.

### Initialization
Function should be initialized inside the mutation observer.