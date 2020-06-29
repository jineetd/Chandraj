import sys
import json
import ast
import pandas as pd
import pdfkit
import datetime
#print("Hello world")
#f=open("template.txt","w+")
test=ast.literal_eval(sys.argv[1])
#f.write(str(type(test)))

df=pd.DataFrame(columns=["Item","Rate","Quantity","Total"])

now=datetime.datetime.now()

ind=0
tot=0
for y in test:
    df.loc[ind]= [y["item"]] + [y["rate"]] + [y["quantity"]] + [(int(y["rate"]) * int(y["quantity"]))]
    ind=ind+1
    tot+=(int(y["rate"]) * int(y["quantity"]))
df.loc[ind]= ["TOTAL"] + ["=>"] + ["=>"] + ["$"+str(tot)]
html=df.to_html()

text_file=open("./bill-pdf/{0}_{1}_bill.html".format(tot,now.month),"w")
fp=open("ref.html","r")
for line in fp:
    text_file.write(line)
fp.close()
text_file.write(html)
text_file.write("</p></div>")
#text_file.write("<div text-align=\"right\" class=\"w3-container w3-content w3-center\" style=\"font-size:30px\" id=\"band\"><p class=\"w3-right-align\"><b>TOTAL : {0}</b></p></div>".format(tot))
text_file.write("<div text-align=\"right\" style=\"font-size:30px\"><p class=\"w3-right-align\">________________<br> SIGN &nbsp;&nbsp;&nbsp;<hr></p></div> ")
text_file.close()
