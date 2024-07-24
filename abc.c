#include<stdio.h>
int main() {
    int a, b, c;
    for (n=2;n<=30;n++)
    {
        if(n=2){printf("%d",n)};
        else if(n%2==0){continue;}
        else if(n%3==0){continue;}
        else if(n%5==0){continue;}
        else {printf("%d",n);}
    }
}