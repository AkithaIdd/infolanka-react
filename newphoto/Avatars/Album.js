import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
});

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar   alt="Remy Sharp" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABBVBMVEX/////3AD/wADg4OD/ga7/aDg1zP8Auv+MYjl1TCT/2gD/4QD/xAD/3gCKXzSde1zl5ueFZEfrxxGEWTtqQiXnrAuHWy1xRRbCr57w8PColYa5kymIXjpwSCW4hiqsiBr/0wCrehrO8f//yNrvrJv/ean/YCj/3unpwbev1umt6P+Nzu/m4d9Y0/+g5P+AzPE3v/v/9fjj1tLnyMCPc1z/+dz/3yf/87r/4T7/5mr/9cX/6oT/8Kv//Ov/7JD/6X//76H/5Fv/++b/57D/8M3/527/4DaUbUn/2Hz/zUf/5az/4Jr/02n/40+AVDzk9//E2uX/3ov/yi//Wxz/ykD/1jT/0F3MzCcBAAAH80lEQVR4nO3d6X/bNBgH8LjcJh3QrhvHgDKgY1CODuKczp2Q9ACSbfn//xQaO4cPPdIjW7aeJ5/+XvbF7O8kS9ZhpVIpPP6wVe93e5O7qec563je9G7S6/brraFf/OULzbDV7zUcx3VdR5Tg741ev8XS6dfbDQeQpaVOo13nxPQ7TSwuxmx2WChbPU9bt1d67ZZtgDz1gZNVt1M6g7ptBhQDPMrIWtsQb4ts12yTYuk0TPI2yEbHNmsbv2u0+CJGp0uhca01i+FtkE3blbU2KNIXGAc2jcX77BqHpfhC49AGsFeWLzD2Svf1S+SF6Zfqq3llFmAY1yvxcSy1gkaMZVXVlhVemFJGHhM7BRjGnRTuG1vkhRkXC+zaLMAwbrdAnz+1D7wnTgt7H7fZxMRTUINDoIZuU0xNvaMDvCfeGff5nm1UIp7hh7FmGySI0Ze4OqUauo1rsL3pUwTeE/sHDjRHJNRLJGOm1yAMNEMkDTRBJPsMbpP3WexQB94Tc03+MwDmI7Y4APN0/TUeQCfzC5xv+741ku01nNpoQhYvC/DO9l1rJcN4kXhPn4x+z8+kGd1Ht0Hl1Mpso9faTG3fboZMdYBtbnV0HbeNB7J7CMNoPIq2bzVrjrHApu07zZwmDkhyYg0XF7cfzvZt5goG2LN9k7mCWAgf862j67jqBVROIwpRlKMMFvMWsijnNGzfoIHIgbybmTDSl7ch9zq6jivb5jewfXdGMoCB0OTa8cc0cyy+XReeehsAwJOvzOVbgzkBiGAhgkV48s8zYzn92lgen52LiWAhQrNrxyenHxrLo4+M5fHZEUAEZt7AKW66wipABAoRHBZSFgJE4UDRB/tC0kIx0RVNvHUhIHGhmCiaIAaBO+EjE3nydBNjQjExDZQMKjbCvz8xkr82+SxPTqNCEVEwxJDMAYfCJ5+Lm2DNfPGpiXz5NCoUEVPzw7LVULPCdwwkKRQQUx2GbNjEQCggJmdsJEAWQgExfl3pHCkLYYqYmDsdECjDS1RAYYoYf6+RARPC56j8qy387yUqsDBFjF5WPpEfF/76Pia/6Qovf/8Akz8uYWGCGKum8rUYNsIEMVpNpUBGwgRxf1XFiigjYYwYWTFVzJJyEsaI+05fsVbBShgl7tYwVPPAvIQR4m4crFqNYSbcE3dDKNW6PTfhnrjtLxRAfsI9EfcYMhRuiZsHUbn3gqFwQ9y8uLUPr5buiOFaYuMghSGxEVxTuSrKUxgQ3fUl1eu+TIVrYrAerN6IyFV4TwxevuHZfPbCo/Ngdl+9E5Gv8Oh8/Vaj3vDMWHj0toLZI8RZeORjduUzFyI+32ItHGN2rbMWjjCbEZkLEceSsRYu1CML5sIZZr8lcyHi4wrWwhXmQ0rWwiXmKzXWwipmb35c+DMqz7WFL39BpQRhzoArpLglYMkaMBDM5nwe6/gPwgfhg5Cw0FZbituhR0N49T0qVzHh5Q+ovMotrOq/06Ty4kdU4sJXry8Qef2nAaFy1QIhfBeRpPDiPUQu8guX+mMLZsKV/viQmXCmP8ZnJ9Sep2EmXFQ6By681p8vZSYc6c95MxOO9dctmAl9/bUnZsKK/vohL+Gyor8GzEs4r+iv4/MSLir6ezF4CUcVzAmXnIXBYS4HLQyuqbmvjZVwGVxTc28iK+FtcE3N/aWshNfBNTX3CLMSbj4kPeBaurlFvb36nITzzS3qfW/BSXizuUW9b2Y4CXffc2t998RJuLtHrW/XGAlvd/eo9f0hI+Fof5MHWoaRI1x0vgPmI5xHblLnW26BkOja03X0LvOU4dULVCox4eVPqORaP4ydMzTIIdRLeavc89h1D+BcDHklPYCzTdJJXJj7+TTprBIXZn7GkCCpA4VZnxOFqKS8z/oS5Sb9n6sqQ7rnteGKkPGZe8LMBEKu5yaKIzxLmOfZl+Iku4owLM8vBQKcPc/vDFpIuBQDyzlH+JnJc4QhIfjzAQNI+I25fGcwZwDwDQSEC9GtkozmUygpROf4HPrHKGYOA+G5YVZE6a8hgmuJjIi3MqDk7ZQPUfH7a/AQgwtRMKiIB17DYEJUAWWDfRZE9W8FyWZsGBAVzUwYWMiAiAFK506pE0dq3jqydRraRNnbDLae0iZigfIVU8JEjZ+Tlf4OKVmiaPYJjHRrNFFiVQeo2MFPk6j56+PyzQsUiciOYh/573LTI2o9hGHkR4JQI8JTM5LId0oRI2YBqr4XIkXUbGW2UeziJ0REDJnEUe0Go0LUbkb3Uew8JUJUzlvI0mdAXOQBqrpFCsScQPrEDD09L6IBIO1nMXcVDUO3Rc3VinIgGgNS7fpzdPTp1KRCO8TMr2ri+ORGGhlftiW5IzUkzjQeVIXSqN9IN5hOi0xFNdrGRON7JOZRq8JNa4ZCYaq4oBq6jbSmlkIsrIbuMrG6+CbedGg4smIsmlh8AYbpWVrrRy1hm0kNblQLJBp+TVMEPiKsKKLBgQQyYMdRCPHW/GuoOsMBtFnTOHEu3YxXYGqA0TDxTbkPYMIoHnGYJFr1BcamyGiMOLftW8dvO2mkGeLM1vOXSqeRMhoglt8/yFLrJQsyJ3FFoXomUh/EkTmI82v15ewkjsxInF/b6N3xafU8181OvB3R5oUZdppOqNQjzm/INJ2I+PV2Y81EEpezUZGTL4Vl2OpP3qps88WIU9EJ4vu11mgxm62W2w+VqtXqcjWbLUajcQkP3f8tiU+2BNlmowAAAABJRU5ErkJggg==" className={classes.bigAvatar} />
     
    </Grid>
  );
}
