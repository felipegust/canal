# teste 1: imprimir somente elementos pares dentro de um array

listaDeFrutas = ['Abacate','Abacaxi','Abiu','Abricó','Abrunho','Açaí','Acerola','Akee','Alfarroba','Ameixa','Amêndoa','Amora','Ananás','Anona','Araçá','Arando','Araticum','Ata','Atemoia','Avelã']

i=0
while (i < len(listaDeFrutas)):
    if i % 2 == 0:
        print(i, listaDeFrutas[i])
    i+=1

