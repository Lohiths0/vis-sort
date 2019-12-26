def bubbleSort(l):
    for i in range(len(l)):
        for j in range(len(l)-1):
            if l[j] > l[j+1]:
                l[j+1],l[j] = l[j], l[j+1]

    return l

def selectionSort(l):
    for i in range(len(l)):
        minEle = i
        for j in range(i, len(l)):
            if l[j]<l[minEle]:
                minEle = j
            
        l[i],l[minEle] = l[minEle], l[i]
    return l

def insertionSort(l):

    ''' 
     for i in range(1,len(l)):
        curr = l[i]
        j = i-1
        while j>=0 and curr<l[j]   
            l[j+1] = l[j]
            j-=1
        l[j] = curr
    return l
    '''

    for i in range(1,len(l)):
        curr = l[i]
        j = i-1
        while j>=0:
            if curr<l[j]:
                l[j+1] = l[j]
                l[j] = curr
                j-=1
            else:
                break   
    return l

def mergeSort(l):

    def mergeSortedArr(a1, a2):
        i,j = 0,0
        new = []
        while i<len(a1) and j<len(a2):
            if a1[i]<a2[j]:
                new.append(a1[i])
                i+=1
            else:
                new.append(a2[j])
                j+=1
        
        while i<len(a1):
            new.append(a1[i])
            i+=1
        
        while j<len(a2):
            new.append(a2[j])
            j+=1
        
        return new
 
    if len(l)<=1:
        return l

    mid = int(len(l)/2)

    left = mergeSort(l[:mid])
    right = mergeSort(l[mid:])

    return mergeSortedArr(left,right)

def quickSort(l):
    from random import randint
    if len(l)<2:
        return l

    small,equal,big = [],[],[]
    pivot = l[randint(0,len(l)-1)]

    for i in l:
        if i<pivot: small.append(i)
        elif i==pivot: equal.append(i)
        elif i>pivot:   big.append(i)
    
    return quickSort(small)+quickSort(equal)+quickSort(big)



lst = [5,4,6,2,3,1,9,7,8, "a" ,10,15,12,13,11,20,19,16,18,17,14] 
print (mergeSort(lst))