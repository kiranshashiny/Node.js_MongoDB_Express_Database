import random
stri="shashi"
i=0

for i in range ( 1, 10 ):
	x = random.randrange( 65,122 )
	if (x >=91 and x<=96):
		continue
	print (x, chr(x), i);
	stri[i] = chr(x);
	i=i+1
	

print (stri)
