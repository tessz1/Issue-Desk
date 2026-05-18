import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
export const Header = () => {
    const lngs = {
        en: { nativeName: "EN" },
        ru: { nativeName: "RU" }
    };
    const { t, i18n } = useTranslation();
    return (
        <header className="w-full border-b border-zinc-200 bg-white px-8">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
                <nav className="flex items-center gap-8 text-sm font-medium text-zinc-600">
                    <NavLink to='/' className="transition hover:text-black cursor-pointer">
                        {t("Dashboard")}
                    </NavLink>
                    <NavLink to='/issues' className="transition hover:text-black cursor-pointer">
                        {t("Issues")}
                    </NavLink>
                </nav>
                <div className="flex items-center gap-2">
                    {Object.keys(lngs).map((lng) => (
                        <button
                            key={lng}
                            onClick={() => i18n.changeLanguage(lng)}
                            disabled={i18n.resolvedLanguage === lng}
                            className={`
                                rounded-md px-3 py-1.5 text-sm font-medium transition
                                ${i18n.resolvedLanguage === lng
                                    ? "bg-black text-white"
                                    : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                                }
                            `}
                        >
                            {lngs[lng].nativeName}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}
