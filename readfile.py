f = open ("GTX.csv", "r")
line = f.readline().strip()

while (line != "" ):
	#print (line)
	linelist = line.split(',')
	datevar= linelist[0];
	openvar = linelist[1];
	#print ("%.2f" % float(openvar))
	print ("{stock: \'GTX\', date:\'%s\', open: \'%.2f\'}," % (datevar, float(openvar)) )
	line = f.readline().strip()
	
