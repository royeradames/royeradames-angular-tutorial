You can group inputs and it will give you access to a group form data.

- `ngModelGroup="<name of group>"`
- `#<group reference name>="ngModelGroup"`

## Practice

Group username, and email inputs. Show a error message if the group is invalid and touch.

```html
<div id="user-data" ngModelGroup="userData" #userData="ngModelGroup">
  <span class="help-block" *ngIf="userData.invalid && userData.touched">UserData is invalid</span>
</div>
```

Submit the form and see the group in the javascript object.