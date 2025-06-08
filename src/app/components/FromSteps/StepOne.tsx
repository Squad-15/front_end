"use client";
interface StepOneProps {
    formData: { firstName: string; lastName: string; email: string; phone: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const StepOne = ({ formData, handleChange }: StepOneProps) => {
    return(
        <div className="grid sm:grid-cols-2 gap-8">
        <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">Nome</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o nome" />
            </div>
            <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">Sobrenome</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o sobrenome" />
            </div>
            <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">E-mail</label>
            <input name="email" value={formData.email} onChange={handleChange} type="text" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o e-mail" />
            </div>
            <div>
            <label className="text-slate-800 text-sm font-medium mb-2 block">Telefone</label>
            <input name="phone" value={formData.phone} onChange={handleChange} type="number" className="bg-slate-100 w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Insira o telefone" />
        </div>
    </div>
    );
}