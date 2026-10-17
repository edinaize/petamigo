import { useMemo, useState } from "react";

type Animal = {
  id: number;
  name: string;
  species: "Cão" | "Gato";
  breed: string;
  age: string;
  sex: "Macho" | "Fêmea";
  location: string;
  image: string;
  imagePosition?: string;
  new?: boolean;
};

const animals: Animal[] = [
  {
    id: 1,
    name: "Bento",
    species: "Cão",
    breed: "Vira-lata",
    age: "2 anos",
    sex: "Macho",
    location: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1629740067905-bd3f515aa739?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 32%",
    new: true,
  },
  {
    id: 2,
    name: "Luna",
    species: "Gato",
    breed: "Sem raça definida",
    age: "1 ano",
    sex: "Fêmea",
    location: "Campinas, SP",
    image:
      "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 42%",
  },
  {
    id: 3,
    name: "Fred",
    species: "Cão",
    breed: "Mestiço",
    age: "3 anos",
    sex: "Macho",
    location: "Sorocaba, SP",
    image:
      "https://images.unsplash.com/photo-1658337922643-6e3d8751a8eb?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 35%",
  },
  {
    id: 4,
    name: "Amora",
    species: "Gato",
    breed: "Sem raça definida",
    age: "8 meses",
    sex: "Fêmea",
    location: "Jundiaí, SP",
    image:
      "https://images.unsplash.com/photo-1582725461742-8ecd962c260d?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 45%",
    new: true,
  },
  {
    id: 5,
    name: "Tobias",
    species: "Cão",
    breed: "Mestiço",
    age: "4 anos",
    sex: "Macho",
    location: "São Paulo, SP",
    image:
      "https://images.unsplash.com/photo-1593991910379-b414c1e3bd74?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 35%",
  },
  {
    id: 6,
    name: "Nina",
    species: "Gato",
    breed: "Sem raça definida",
    age: "2 anos",
    sex: "Fêmea",
    location: "Osasco, SP",
    image:
      "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&w=900&q=85",
    imagePosition: "center 45%",
  },
];

function Icon({
  name,
  size = 20,
}: {
  name:
    | "search"
    | "user"
    | "heart"
    | "pin"
    | "arrow"
    | "paw"
    | "camera"
    | "check"
    | "back";
  size?: number;
}) {
  const paths = {
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    back: <path d="m15 18-6-6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    camera: (
      <>
        <path d="M14.5 4 16 7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1.5-3h5Z" />
        <circle cx="12" cy="13" r="3.5" />
      </>
    ),
    paw: (
      <>
        <ellipse cx="12" cy="16.5" rx="5" ry="3.7" />
        <circle cx="6.5" cy="10.5" r="2" />
        <circle cx="10.5" cy="7" r="2" />
        <circle cx="15.5" cy="7" r="2" />
        <circle cx="18.5" cy="11" r="2" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      fill={name === "paw" ? "currentColor" : "none"}
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={name === "paw" ? 0 : 1.8}
      viewBox="0 0 24 24"
      width={size}
    >
      {paths[name]}
    </svg>
  );
}

type Page = "home" | "signup" | "animal";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#294235]/15 bg-white px-4 py-3.5 text-sm text-[#26372d] outline-none transition placeholder:text-[#9aa29c] focus:border-[#ea775b] focus:ring-4 focus:ring-[#ea775b]/10";

function FormHeader({ onHome }: { onHome: () => void }) {
  return (
    <header className="border-b border-[#294235]/10 bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1120px] items-center justify-between px-5 sm:px-8">
        <button
          className="flex items-center gap-2.5"
          onClick={onHome}
          type="button"
        >
          <span className="flex h-10 w-10 rotate-[-7deg] items-center justify-center rounded-[14px] bg-[#ea775b] text-white shadow-sm">
            <Icon name="paw" size={23} />
          </span>
          <span className="font-display text-[23px] font-bold tracking-[-0.04em]">
            pata<span className="text-[#ea775b]">amiga</span>
          </span>
        </button>
        <button
          className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-bold text-[#67736b] transition hover:bg-[#f5f2eb] hover:text-[#294235]"
          onClick={onHome}
          type="button"
        >
          <Icon name="back" size={18} />
          Voltar ao início
        </button>
      </div>
    </header>
  );
}

function SuccessMessage({
  title,
  description,
  onHome,
  primaryLabel = "Voltar para o início",
  onPrimary,
}: {
  title: string;
  description: string;
  onHome: () => void;
  primaryLabel?: string;
  onPrimary?: () => void;
}) {
  return (
    <div className="mx-auto max-w-lg rounded-[28px] border border-[#294235]/10 bg-white px-6 py-14 text-center shadow-[0_20px_60px_rgba(41,66,53,0.10)]">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#e6f0e7] text-[#4e7557]">
        <Icon name="check" size={30} />
      </span>
      <h2 className="font-display mt-6 text-3xl font-bold tracking-[-0.04em]">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#758078]">
        {description}
      </p>
      <button
        className="mt-8 rounded-full bg-[#294235] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#385848]"
        onClick={onPrimary ?? onHome}
        type="button"
      >
        {primaryLabel}
      </button>
      {onPrimary && (
        <button
          className="mt-4 block w-full text-sm font-bold text-[#6f7a72] transition hover:text-[#294235]"
          onClick={onHome}
          type="button"
        >
          Voltar para o início
        </button>
      )}
    </div>
  );
}

function SignupPage({
  onHome,
  onRegistered,
  onRegisterAnimal,
  animalIntent,
}: {
  onHome: () => void;
  onRegistered: () => void;
  onRegisterAnimal: () => void;
  animalIntent: boolean;
}) {
  const [profileType, setProfileType] = useState<"adotante" | "protetor" | "ong">(
    animalIntent ? "protetor" : "adotante",
  );
  const [accountMode, setAccountMode] = useState<"create" | "login">("create");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-[#f9f7f2] text-[#26372d]">
      <FormHeader onHome={onHome} />
      <section className="relative overflow-hidden px-5 py-10 sm:px-8 sm:py-14">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#a9c3ad]/20 blur-3xl" />
        <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#f3c865]/20 blur-3xl" />
        {submitted ? (
          <SuccessMessage
            description={
              accountMode === "create"
                ? "Seu perfil foi criado. Agora você já pode acompanhar adoções e fazer parte da rede Pata Amiga."
                : "Você entrou na sua conta e já pode continuar usando todos os recursos da Pata Amiga."
            }
            onHome={onHome}
            onPrimary={animalIntent ? onRegisterAnimal : undefined}
            primaryLabel={animalIntent ? "Continuar para cadastrar animal" : undefined}
            title={accountMode === "create" ? "Cadastro concluído!" : "Login realizado!"}
          />
        ) : (
          <div className="relative mx-auto max-w-[760px]">
            <div className="mb-8 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ea775b]">
                Faça parte dessa rede
              </span>
              <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                Minha Conta
              </h1>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#6f7a72]">
                Entre para adotar, acompanhar favoritos ou divulgar um animal.
              </p>
            </div>

            <form
              className="rounded-[28px] border border-[#294235]/10 bg-white p-5 shadow-[0_20px_60px_rgba(41,66,53,0.08)] sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                onRegistered();
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="mb-7 grid grid-cols-2 rounded-xl bg-[#f5f2eb] p-1.5">
                <button
                  className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                    accountMode === "create"
                      ? "bg-white text-[#294235] shadow-sm"
                      : "text-[#778078] hover:text-[#294235]"
                  }`}
                  onClick={() => setAccountMode("create")}
                  type="button"
                >
                  Criar conta
                </button>
                <button
                  className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                    accountMode === "login"
                      ? "bg-white text-[#294235] shadow-sm"
                      : "text-[#778078] hover:text-[#294235]"
                  }`}
                  onClick={() => setAccountMode("login")}
                  type="button"
                >
                  Já tenho uma conta
                </button>
              </div>

              {animalIntent && (
                <div className="mb-7 flex gap-3 rounded-2xl bg-[#f2e5d1] p-4 text-[#694b3c]">
                  <span className="mt-0.5 shrink-0 text-[#ea775b]">
                    <Icon name="user" size={20} />
                  </span>
                  <div>
                    <strong className="block text-sm">Cadastro necessário</strong>
                    <p className="mt-1 text-xs leading-5">
                      Para proteger os animais e adotantes, apenas protetores e ONGs cadastrados podem publicar animais.
                    </p>
                  </div>
                </div>
              )}
              {accountMode === "create" ? (
                <>
                  <fieldset>
                    <legend className="mb-3 text-sm font-bold">
                      Como você quer usar a Pata Amiga?
                    </legend>
                    <div
                      className={`grid gap-3 ${
                        animalIntent ? "sm:grid-cols-2" : "sm:grid-cols-3"
                      }`}
                    >
                      {[
                        ...(!animalIntent
                          ? [
                              {
                                id: "adotante" as const,
                                title: "Quero adotar",
                                text: "Busco um novo amigo para minha família",
                              },
                            ]
                          : []),
                        {
                          id: "protetor" as const,
                          title: "Sou protetor",
                          text: "Cuido e divulgo animais por conta própria",
                        },
                        {
                          id: "ong" as const,
                          title: "Sou uma ONG",
                          text: "Represento uma organização de proteção",
                        },
                      ].map((option) => (
                        <label
                          className={`cursor-pointer rounded-2xl border p-4 transition ${
                            profileType === option.id
                              ? "border-[#ea775b] bg-[#fff7f3] ring-2 ring-[#ea775b]/10"
                              : "border-[#294235]/15 hover:border-[#294235]/30"
                          }`}
                          key={option.id}
                        >
                          <input
                            checked={profileType === option.id}
                            className="sr-only"
                            name="profileType"
                            onChange={() => setProfileType(option.id)}
                            type="radio"
                            value={option.id}
                          />
                          <span className="flex items-start gap-3">
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                                profileType === option.id
                                  ? "border-[#ea775b] bg-[#ea775b] text-white"
                                  : "border-[#aeb5b0]"
                              }`}
                            >
                              {profileType === option.id && (
                                <Icon name="check" size={13} />
                              )}
                            </span>
                            <span>
                              <strong className="block text-sm">{option.title}</strong>
                              <span className="mt-1 block text-xs leading-5 text-[#7a847d]">
                                {option.text}
                              </span>
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="my-7 h-px bg-[#294235]/10" />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-bold sm:col-span-2">
                      Nome completo
                      <input
                        className={inputClass}
                        name="name"
                        placeholder="Digite seu nome completo"
                        required
                        type="text"
                      />
                    </label>
                    <label className="text-sm font-bold">
                      E-mail
                      <input
                        className={inputClass}
                        name="email"
                        placeholder="voce@email.com"
                        required
                        type="email"
                      />
                    </label>
                    <label className="text-sm font-bold">
                      Telefone
                      <input
                        className={inputClass}
                        name="phone"
                        placeholder="(00) 00000-0000"
                        required
                        type="tel"
                      />
                    </label>
                    <label className="text-sm font-bold sm:col-span-2">
                      Senha
                      <input
                        className={inputClass}
                        minLength={6}
                        name="password"
                        placeholder="Mínimo de 6 caracteres"
                        required
                        type="password"
                      />
                    </label>
                  </div>

                  <label className="mt-6 flex items-start gap-3 text-xs leading-5 text-[#6f7a72]">
                    <input
                      className="mt-0.5 h-4 w-4 accent-[#ea775b]"
                      required
                      type="checkbox"
                    />
                    Concordo com os Termos de Uso e com a Política de Privacidade da Pata Amiga.
                  </label>
                </>
              ) : (
                <div className="grid gap-5">
                  <label className="text-sm font-bold">
                    E-mail
                    <input
                      className={inputClass}
                      name="loginEmail"
                      placeholder="voce@email.com"
                      required
                      type="email"
                    />
                  </label>
                  <label className="text-sm font-bold">
                    Senha
                    <input
                      className={inputClass}
                      name="loginPassword"
                      placeholder="Digite sua senha"
                      required
                      type="password"
                    />
                  </label>
                  <button
                    className="justify-self-end text-xs font-bold text-[#ea775b] hover:underline"
                    type="button"
                  >
                    Esqueci minha senha
                  </button>
                </div>
              )}

              <button
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#ea775b] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#dc684d]"
                type="submit"
              >
                {accountMode === "create" ? "Criar minha conta" : "Entrar na minha conta"}
                <Icon name="arrow" size={18} />
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}

function AnimalPage({ onHome }: { onHome: () => void }) {
  const [preview, setPreview] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const traits = ["Dócil", "Brincalhão", "Calmo", "Sociável", "Castrado", "Vacinado"];

  return (
    <main className="min-h-screen bg-[#f9f7f2] text-[#26372d]">
      <FormHeader onHome={onHome} />
      <section className="relative overflow-hidden px-5 py-10 sm:px-8 sm:py-14">
        <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#a9c3ad]/20 blur-3xl" />
        {submitted ? (
          <SuccessMessage
            description="O perfil do animal foi enviado e em breve estará disponível para pessoas interessadas em adotar."
            onHome={onHome}
            title="Animal cadastrado!"
          />
        ) : (
          <div className="relative mx-auto max-w-[900px]">
            <div className="mb-8 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ea775b]">
                Uma nova chance
              </span>
              <h1 className="font-display mt-2 text-4xl font-bold tracking-[-0.045em] sm:text-5xl">
                Cadastre um animal
              </h1>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#6f7a72]">
                Conte um pouco sobre ele. Quanto mais completo o perfil, maiores as chances de encontrar um novo lar.
              </p>
            </div>

            <form
              className="rounded-[28px] border border-[#294235]/10 bg-white p-5 shadow-[0_20px_60px_rgba(41,66,53,0.08)] sm:p-8"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="grid gap-8 md:grid-cols-[240px_1fr]">
                <div>
                  <span className="text-sm font-bold">Foto do animal</span>
                  <label className="mt-2 flex aspect-square cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#294235]/20 bg-[#faf9f6] text-center transition hover:border-[#ea775b] hover:bg-[#fff7f3]">
                    {preview ? (
                      <img
                        alt="Pré-visualização do animal"
                        className="h-full w-full object-cover"
                        src={preview}
                      />
                    ) : (
                      <>
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7e6df] text-[#ea775b]">
                          <Icon name="camera" size={23} />
                        </span>
                        <strong className="mt-3 text-sm">Adicionar foto</strong>
                        <span className="mt-1 px-4 text-xs leading-5 text-[#89918c]">
                          JPG ou PNG de até 10 MB
                        </span>
                      </>
                    )}
                    <input
                      accept="image/png,image/jpeg"
                      className="sr-only"
                      name="photo"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) setPreview(URL.createObjectURL(file));
                      }}
                      required
                      type="file"
                    />
                  </label>
                  {preview && (
                    <label className="mt-3 block cursor-pointer text-center text-xs font-bold text-[#ea775b]">
                      Trocar foto
                      <input
                        accept="image/png,image/jpeg"
                        className="sr-only"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (file) setPreview(URL.createObjectURL(file));
                        }}
                        type="file"
                      />
                    </label>
                  )}
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-bold sm:col-span-2">
                    Nome do animal
                    <input
                      className={inputClass}
                      name="animalName"
                      placeholder="Ex.: Bento"
                      required
                      type="text"
                    />
                  </label>
                  <label className="text-sm font-bold">
                    Espécie
                    <select className={inputClass} defaultValue="" name="species" required>
                      <option disabled value="">Selecione</option>
                      <option>Cão</option>
                      <option>Gato</option>
                    </select>
                  </label>
                  <label className="text-sm font-bold">
                    Idade aproximada
                    <input
                      className={inputClass}
                      name="age"
                      placeholder="Ex.: 2 anos"
                      required
                      type="text"
                    />
                  </label>
                  <label className="text-sm font-bold">
                    Sexo
                    <select className={inputClass} defaultValue="" name="sex" required>
                      <option disabled value="">Selecione</option>
                      <option>Macho</option>
                      <option>Fêmea</option>
                    </select>
                  </label>
                  <label className="text-sm font-bold">
                    Porte
                    <select className={inputClass} defaultValue="" name="size" required>
                      <option disabled value="">Selecione</option>
                      <option>Pequeno</option>
                      <option>Médio</option>
                      <option>Grande</option>
                    </select>
                  </label>
                </div>
              </div>

              <div className="my-8 h-px bg-[#294235]/10" />

              <fieldset>
                <legend className="text-sm font-bold">Características</legend>
                <p className="mt-1 text-xs text-[#89918c]">Marque todas que combinam com o animal.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {traits.map((trait) => (
                    <label className="cursor-pointer" key={trait}>
                      <input className="peer sr-only" name="traits" type="checkbox" value={trait} />
                      <span className="block rounded-full border border-[#294235]/15 px-4 py-2.5 text-xs font-bold text-[#68736b] transition peer-checked:border-[#ea775b] peer-checked:bg-[#fff3ee] peer-checked:text-[#d55f45] hover:border-[#294235]/30">
                        {trait}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-bold sm:col-span-2">
                  Localização
                  <input
                    className={inputClass}
                    name="location"
                    placeholder="Cidade e estado"
                    required
                    type="text"
                  />
                </label>
                <label className="text-sm font-bold sm:col-span-2">
                  Informações adicionais
                  <textarea
                    className={`${inputClass} min-h-32 resize-y`}
                    name="details"
                    placeholder="Conte sobre a história, rotina, saúde e o lar ideal para este animal..."
                    required
                  />
                </label>
                <label className="text-sm font-bold sm:col-span-2">
                  Telefone para contato
                  <input
                    className={inputClass}
                    name="contactPhone"
                    placeholder="(00) 00000-0000"
                    required
                    type="tel"
                  />
                  <span className="mt-2 block text-xs font-normal text-[#89918c]">
                    Este será o contato exibido para pessoas interessadas na adoção.
                  </span>
                </label>
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[#294235]/10 pt-6 sm:flex-row sm:justify-end">
                <button
                  className="rounded-xl border border-[#294235]/20 px-6 py-3.5 text-sm font-bold transition hover:bg-[#f5f2eb]"
                  onClick={onHome}
                  type="button"
                >
                  Cancelar
                </button>
                <button
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#ea775b] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#dc684d]"
                  type="submit"
                >
                  Publicar animal
                  <Icon name="arrow" size={18} />
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [animalIntent, setAnimalIntent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(
    () => window.localStorage.getItem("pata-amiga-registered") === "true",
  );
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"Todos" | "Cães" | "Gatos">("Todos");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredAnimals = useMemo(() => {
    const term = query.trim().toLocaleLowerCase("pt-BR");
    return animals.filter((animal) => {
      const matchesFilter =
        filter === "Todos" ||
        (filter === "Cães" && animal.species === "Cão") ||
        (filter === "Gatos" && animal.species === "Gato");
      const matchesSearch =
        !term ||
        [animal.name, animal.breed, animal.location, animal.species]
          .join(" ")
          .toLocaleLowerCase("pt-BR")
          .includes(term);
      return matchesFilter && matchesSearch;
    });
  }, [filter, query]);

  const toggleFavorite = (id: number) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((favoriteId) => favoriteId !== id)
        : [...current, id],
    );
  };

  const requestAnimalRegistration = () => {
    if (isRegistered) {
      setPage("animal");
      return;
    }
    setAnimalIntent(true);
    setPage("signup");
  };

  if (page === "signup") {
    return (
      <SignupPage
        animalIntent={animalIntent}
        onHome={() => {
          setAnimalIntent(false);
          setPage("home");
        }}
        onRegisterAnimal={() => {
          setAnimalIntent(false);
          setPage("animal");
        }}
        onRegistered={() => {
          window.localStorage.setItem("pata-amiga-registered", "true");
          setIsRegistered(true);
        }}
      />
    );
  }

  if (page === "animal") {
    return <AnimalPage onHome={() => setPage("home")} />;
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f9f7f2] text-[#26372d]">
      <header className="relative z-20 border-b border-[#294235]/10 bg-[#f9f7f2]/95 backdrop-blur">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <button
            aria-label="Pata Amiga"
            className="flex items-center gap-2.5"
            onClick={() => setPage("home")}
            type="button"
          >
            <span className="flex h-10 w-10 rotate-[-7deg] items-center justify-center rounded-[14px] bg-[#ea775b] text-white shadow-sm">
              <Icon name="paw" size={23} />
            </span>
            <span className="font-display text-[23px] font-bold tracking-[-0.04em]">
              pata<span className="text-[#ea775b]">amiga</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a className="text-[#ea775b]" href="#animais">
              Adotar
            </a>
            <a className="transition hover:text-[#ea775b]" href="#como-funciona">
              Como funciona
            </a>
            <a className="transition hover:text-[#ea775b]" href="#sobre">
              Sobre nós
            </a>
            <button
              className="transition hover:text-[#ea775b]"
              onClick={requestAnimalRegistration}
              type="button"
            >
              Cadastrar animal
            </button>
          </nav>

          <button
            aria-label="Minha Conta"
            className="flex items-center gap-2 rounded-full border border-[#294235]/20 px-4 py-2.5 text-sm font-bold transition hover:border-[#ea775b] hover:text-[#ea775b]"
            onClick={() => {
              setAnimalIntent(false);
              setPage("signup");
            }}
            type="button"
          >
            <Icon name="user" size={17} />
            <span className="hidden sm:inline">Minha Conta</span>
          </button>
        </div>
      </header>

      <section className="relative">
        <div className="absolute -right-24 -top-28 h-[380px] w-[380px] rounded-full bg-[#f3c865]/25 blur-3xl" />
        <div className="absolute -left-20 top-36 h-64 w-64 rounded-full bg-[#a9c3ad]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <div className="max-w-[650px]">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f2e5d1] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#8d593e]">
              <span className="h-2 w-2 rounded-full bg-[#ea775b]" />
              Mais de 200 animais esperando por você
            </div>
            <h1 className="font-display text-[clamp(3rem,6vw,5.35rem)] font-bold leading-[0.95] tracking-[-0.055em] text-[#294235]">
              Seu novo melhor amigo{" "}
              <span className="relative inline-block text-[#ea775b]">
                está aqui.
                <svg
                  className="absolute -bottom-2 left-1 w-[92%] text-[#f1c35e]"
                  fill="none"
                  viewBox="0 0 300 14"
                >
                  <path
                    d="M3 10c67-8 161-9 294-3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="7"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-[550px] text-lg leading-8 text-[#5f6c63]">
              Encontre cães e gatos cheios de amor para dar. Adotar transforma
              duas vidas — a deles e a sua.
            </p>

            <label className="mt-9 flex max-w-[600px] items-center rounded-2xl border border-[#294235]/10 bg-white p-2 pl-5 shadow-[0_18px_50px_rgba(41,66,53,0.12)]">
              <span className="text-[#7b887f]">
                <Icon name="search" size={21} />
              </span>
              <input
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-[#98a098]"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Busque por nome, raça ou cidade"
                type="search"
                value={query}
              />
              <button className="rounded-xl bg-[#294235] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#385848]">
                Buscar
              </button>
            </label>
          </div>

          <div className="relative hidden min-h-[470px] lg:block">
            <div className="absolute right-2 top-0 h-[430px] w-[82%] rotate-3 overflow-hidden rounded-[44%_44%_30%_30%/34%_34%_46%_46%] bg-[#efc65f]">
              <img
                alt="Cachorro feliz esperando por adoção"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1724367281416-cf18867ad712?auto=format&fit=crop&w=1100&q=90"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26372d]/20 to-transparent" />
            </div>
            <div className="absolute bottom-5 left-2 flex items-center gap-3 rounded-2xl bg-white p-3.5 pr-5 shadow-[0_18px_45px_rgba(41,66,53,0.16)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fce8e1] text-[#ea775b]">
                <Icon name="heart" size={21} />
              </div>
              <div>
                <strong className="block text-sm">Adoção responsável</strong>
                <span className="text-xs text-[#748078]">Amor que muda histórias</span>
              </div>
            </div>
            <span className="absolute right-0 top-5 h-14 w-14 rounded-full border-[12px] border-[#a8bfa5]/50" />
          </div>
        </div>
      </section>

      <section className="bg-white" id="animais">
        <div className="mx-auto max-w-[1240px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#ea775b]">
                Conheça seu novo amigo
              </span>
              <h2 className="font-display mt-2 text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                Esperando por um lar
              </h2>
            </div>
            <div className="flex rounded-full bg-[#f5f2eb] p-1.5">
              {(["Todos", "Cães", "Gatos"] as const).map((item) => (
                <button
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    filter === item
                      ? "bg-[#294235] text-white shadow-sm"
                      : "text-[#6c786f] hover:text-[#294235]"
                  }`}
                  key={item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {filteredAnimals.length > 0 ? (
            <div className="mt-10 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {filteredAnimals.map((animal) => {
                const isFavorite = favorites.includes(animal.id);
                return (
                  <article
                    className="group overflow-hidden rounded-[26px] border border-[#294235]/10 bg-[#fdfcf9] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(41,66,53,0.12)]"
                    key={animal.id}
                  >
                    <div className="relative h-[285px] overflow-hidden">
                      <img
                        alt={`${animal.name}, ${animal.breed}, disponível para adoção`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        src={animal.image}
                        style={{ objectPosition: animal.imagePosition }}
                      />
                      {animal.new && (
                        <span className="absolute left-4 top-4 rounded-full bg-[#f1c35e] px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#483c1e]">
                          Recém-chegado
                        </span>
                      )}
                      <button
                        aria-label={
                          isFavorite
                            ? `Remover ${animal.name} dos favoritos`
                            : `Adicionar ${animal.name} aos favoritos`
                        }
                        className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition ${
                          isFavorite
                            ? "bg-[#ea775b] text-white"
                            : "bg-white/95 text-[#294235] hover:text-[#ea775b]"
                        }`}
                        onClick={() => toggleFavorite(animal.id)}
                      >
                        <span className={isFavorite ? "fill-current" : ""}>
                          <Icon name="heart" size={19} />
                        </span>
                      </button>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">
                            {animal.name}
                          </h3>
                          <p className="mt-1 text-sm text-[#788179]">{animal.breed}</p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                            animal.species === "Cão"
                              ? "bg-[#e5efe5] text-[#4e6e54]"
                              : "bg-[#f7e7df] text-[#9b5f48]"
                          }`}
                        >
                          {animal.species}
                        </span>
                      </div>
                      <div className="my-5 flex gap-2 text-xs font-semibold text-[#536158]">
                        <span className="rounded-lg bg-[#f1efe9] px-3 py-2">{animal.age}</span>
                        <span className="rounded-lg bg-[#f1efe9] px-3 py-2">{animal.sex}</span>
                      </div>
                      <div className="flex items-center justify-between border-t border-[#294235]/10 pt-4">
                        <span className="flex items-center gap-1.5 text-xs text-[#788179]">
                          <Icon name="pin" size={15} />
                          {animal.location}
                        </span>
                        <button className="flex items-center gap-1.5 text-sm font-bold text-[#ea775b] transition hover:gap-2.5">
                          Conhecer
                          <Icon name="arrow" size={17} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl bg-[#f5f2eb] px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#ea775b]">
                <Icon name="search" size={24} />
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold">
                Nenhum amigo encontrado
              </h3>
              <p className="mt-2 text-sm text-[#788179]">
                Tente buscar por outro nome, raça ou cidade.
              </p>
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <button className="flex items-center gap-2 rounded-full border border-[#294235]/25 px-6 py-3.5 text-sm font-bold transition hover:border-[#294235] hover:bg-[#294235] hover:text-white">
              Ver todos os animais
              <Icon name="arrow" size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#294235] text-white" id="como-funciona">
        <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 px-5 py-9 text-center sm:px-8 md:flex-row md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold">Pronto para mudar uma vida?</h2>
            <p className="mt-1 text-sm text-white/65">
              Veja como funciona o processo de adoção responsável.
            </p>
          </div>
          <button
            className="rounded-full bg-[#f1c35e] px-6 py-3 text-sm font-bold text-[#294235] transition hover:bg-[#f6d47e]"
            onClick={requestAnimalRegistration}
            type="button"
          >
            Cadastrar um animal
          </button>
        </div>
      </section>
    </main>
  );
}
