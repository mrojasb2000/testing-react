import Mock = jest.Mock;

describe('jest.fn for spying',() =>{
    it('should mock a function', () => {
        const mock = jest.fn();
        mock('Juntao');
        const expected = 'Juntao';
        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith(expected);
    });
    it('should mock implementation', () => {
        const expected: number = 5;
        // A dummy mock object that simulates the behavior of a real function.
        // It can be used to test how a function is called and what it returns.
        const fakeAdd = jest.fn().mockImplementation((a: number, b: number) => expected)
        expect(fakeAdd(1,1)).toBe(expected);
        expect(fakeAdd).toHaveBeenCalledWith(1,1);
    });
});

// Función fetchUser que usa fetch para obtener datos del usuario
const fetchUser = (userId: number) => {
    return fetch(`https://api.example.com/users/${userId}`)
        .then(response => response);
};

describe('stub a remote service call',() =>{
    const user = {
        name: 'Juntao',
    };
    it('should mock fetch call API ', async () => {
       // given
       global.fetch = jest.fn().mockImplementation(() =>
           Promise.resolve({
               json: () => Promise.resolve({ user })
           } as Response)
       );

       // when
       const actual: Response = await fetchUser(111);

       // then
       expect(global.fetch).toHaveBeenCalledWith('https://api.example.com/users/111');
       expect(global.fetch).toHaveBeenCalledTimes(1);
       expect(actual.json()).not.toBeNull();
       const data = await actual.json();
       expect(data.user).toEqual(user);
       expect(data.user?.name).toEqual('Juntao');
    });
})