import sys,json
def patch(path, pairs):
    s=open(path,encoding='utf8').read()
    for i,(a,b) in enumerate(pairs):
        n=s.count(a)
        if n!=1: print(f'!! {path} edit#{i} count={n}: {a[:90]!r}'); sys.exit(1)
        s=s.replace(a,b)
    open(path,'w',encoding='utf8').write(s); print(path,'ok',len(pairs))
