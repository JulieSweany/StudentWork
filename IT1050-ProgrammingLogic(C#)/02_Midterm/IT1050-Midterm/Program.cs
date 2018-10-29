using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IT1050_Midterm
{
    class Program
    {
        static void Main(string[] args)
        {
           

            //Question 1
            /*
            bool keepLooping = true;

            while (keepLooping == true)
                Console.WriteLine("Oh no! It's an infinite loop!");
            */

            //Question 2

            int a = 2;

            while (a < 129)
            {
                Console.WriteLine("[{0}]", a);
                a = a * 2;
            }

            //Question 3

            for (int b = 49; b > 0; b--)
            {

                Console.Write("{0}", b);
                if (b > 1)
                    Console.Write(", ");
                else
                    Console.Write("\n");
            }

                //Question 4
                int c = 1;

                while (c < 22)
                {
                    Console.Write(c);
                    if (c == 21)
                    {
                        Console.Write("\n");
                        break;
                    }
                    Console.Write("   ");
                    c = c + 2;
                }

                //Question 5
                int n = 8;
                int i = 10;

                while (i < n)
                    Console.Write("*");
                i++;
                /*The while loop version of question 5 outputs no asterisk, but the do-while version 
                 * does output 1 asterisk. This is because the condition is evaluated at the beginning 
                 * of the while statement, and in this case, i is not less than n. In the do-while version, 
                 the condition is evaluated at the end, so the Console.Write and increment statements
                 are executed one time.*/


                //Question 6
                bool icyRain;
                bool tornadoWarning;

                Console.WriteLine("Is there icy rain? Please answer with true or false, and press the enter key.");
                icyRain = Convert.ToBoolean(Console.ReadLine());

                Console.WriteLine("Is there a tornado warning? Please answer with true or false, and press the enter key.");
                tornadoWarning = Convert.ToBoolean(Console.ReadLine());

                if (icyRain == false && tornadoWarning == false)
                    Console.WriteLine("Let's go outside!");


                //Question7

                for (int h = 1; h <= 5; h++)
                {
                    for (int j = 1; j < h; j++)
                    {
                        Console.Write(" ");
                    }

                    int number1 = 1;

                    for (int k = h; k <= 5; k++)
                    {
                        Console.Write(number1);
                        number1++;
                    }
                    number1 = 1;

                    int number2 = 5 - h;

                    for (int l = h; l <= 4; l++)
                    {
                        Console.Write(number2);
                        number2--;
                    }



                    Console.WriteLine();
                }
            }
        }
    }

