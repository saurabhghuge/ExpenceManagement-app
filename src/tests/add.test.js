const add=(a,b) =>a+b;

test ('here is ur test running for add', () =>{
    const result =add(4,7);
    expect(result).toBe(11);
} );