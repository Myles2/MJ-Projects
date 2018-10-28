#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int n = 0;
    do {
        printf("How tall should Mario's pyramid be? :");
        n = get_int();
        if (n == 0)
        {
            return 0;
        }
       } while (n < 1 || n > 23);

    for(int i = 0; i < n; i++)
    {
       for(int j = 0; j < n-i-1; j++)
       {
           printf("%s", " ");
       }
       for(int k = 0; k < i+2; k++)
       {
           printf("#");
       }
       printf("\n");
    }
    return 0;
}