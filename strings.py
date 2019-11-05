print ( "hello world")
import random

#  {id: 1, displayName: 'GTX', previous_close:'9.40', open: '9.42'}

message=""
new = 'c';
for i in range (0, 4):
	x = random.randrange ( 65,90 )
	print  (x, chr(x) )
	message=message+chr(x)

displayName  = message;

previous_close = round (random.random (),2)  
previous_close = previous_close *10

open = round (random.random (),2)  
open = open *10
#  {id: 1, displayName: 'GTX', previous_close:'9.40', open: '9.42'}
print "{id: 1, displayName: 'GTX', previous_close:'9.40', open: '9.42'}"

print ( "{id: 1, displayName:  " displayName)
